import React, { useState, useEffect, useMemo, useRef } from "react";
import {useHistory} from 'react-router-dom';
import { getSymbols } from '../../services/SymbolsService';

/**
 * props
 * - symbol
 * - onlyFavorites
 *  -disabled
 * - onChange
 */
function SelectSymbol(props) {

    const history = useHistory('');

    const [symbols, setSymbols] = useState(["LOADING"]);
    const [onlyFavorites, setOnlyFavorites] = useState(props.onlyFavorites === null || props.onlyFavorites === undefined ? true : props.onlyFavorites);

    const selectRef = useRef('');
    const buttonRef = useRef('');

    function onlyFavoriteClick(event) {
        setOnlyFavorites(!onlyFavorites)
    }

    function getStartFillColor() {
        return onlyFavorites ? "yellow" : "white";

    }

    useEffect(() => {
        selectRef.current.value = props.symbol || 'BTCUSDT';
        buttonRef.current.disabled = selectRef.current.disabled = props.disabled;
    }, [props.symbol])

    useEffect(() => {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbolObjects => {
                const symbolNames = onlyFavorites
                    ? symbolObjects.filter(s => s.isFavorite).map(s => s.symbol)
                    : symbolObjects.map(s => s.symbol);

                if (symbolNames.length) {
                    setSymbols(symbolNames);
                    selectRef.current.value = props.symbol || symbolNames[0];
                    //props.onChange({ target: { id: 'symbol', value: symbolNames[0] } });
                }
                else setSymbols(["NO SYMBOLS"]);
            })
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err);
                setSymbols(["ERROR"]);
            })
    }, [onlyFavorites]);


    const selectSymbol = useMemo(() => {

        return (
            <div className="form-group mb-4">
                <label htmlFor="symbol">Symbol</label>
                <div className="input-group">
                    <button ref={buttonRef} type="button" className="btn btn-secondary d-inline-flex align-items-center" onClick={onlyFavoriteClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={getStartFillColor()} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon icon-xs">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </button>
                    <select ref={selectRef} id="symbol" className="bg-gray-700 text-gray-300 form-select" onChange={props.onChange}>
                        {symbols.map(s => (<option key={s} value={s}>{s}</option>))}
                    </select>
                </div>

            </div>
        )

    }, [symbols])

    return(selectSymbol)

}

export default SelectSymbol;