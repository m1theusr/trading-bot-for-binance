import React, { useState, useEffect, useRef} from 'react';
import { updateSymbol } from '../../services/SymbolsService';

/*
*props
* - data
* - onSubmit
*/

function SymbolModal(props) {

    const btnClose = useRef('');

    const [error, setError] = useState();

    const [symbol, setSymbol] = useState({});

    useEffect(() => {
        if (!props.data) return;
        setSymbol(props.data);
    }, [props.data])

    function onInputChange(event) {
        setSymbol(prevState => ({ ...prevState, [event.target.id]: event.target.value }));



    }
    function onSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        updateSymbol(symbol, token)
        .then(result =>{
            btnClose.current.click();
            setError('');
            props.onSubmit({target: {id: 'symbol', value: symbol}});
        })
        .catch(err => setError(err.respose ? err.respose.data : err.message));

    }

    function getStarFillColor(){
        return symbol.isFavorite ? "yellow" : "white";
    }

    function onFavoriteClick(event){
        setSymbol(prevState => ({ ...prevState, isFavorite: !symbol.isFavorite}));

    }

    return (
        <div className="modal fade" id="modalSymbol" tabIndex="-1" role="dialog" aria-labelledby="modalTittleModify" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="bg-gray-800 modal-content">
                    <div className="border-dark modal-header">
                        <p className="modal-tittle" id="modalTittleModify">Edit Symbol</p>
                        <button ref={btnClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <form onSubmit={onSubmit} />
                    <div className="bg-gray-800  modal-body">
                        <div className="py-0">
                            <div className="form-group mb-4">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group mb-4">
                                            <label htmlFor="symbol">Symbol</label>
                                            <div className="input-group">
                                                <input className="bg-gray-800 form-control" id="symbol" text="text" placeholder="BTCUSD" defaultValue={symbol.symbol} required disabled />
                                                <button className="btn btn-secondary d-inline-flex align-items-center me-2" type="button" onClick={onFavoriteClick}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill={getStarFillColor()} viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="icon icon-xs" onClick={onFavoriteClick}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="basePrecision">Base Precision</label>
                                            <input type="number" className="bg-gray-800 form-control" id="basePrecision" placeholder="8" defaultValue={symbol.basePrecision} required onchange={onInputChange} />

                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="quotePrecision">Quote Precision</label>
                                            <input type="number" className="bg-gray-800 form-control" id="quotePrecision" placeholder="8" defaultValue={symbol.quotePrecision} required onchange={onInputChange} />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="minNotional">Min Notional:</label>
                                            <input type="text" className="bg-gray-800 form-control" id="minNotional" placeholder="0.1" defaultValue={symbol.minNotional} required onchange={onInputChange} />

                                        </div>

                                    </div>
                                    <div className=" col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="minLotSize">Min Lot Size:</label>
                                            <input type="text" className="bg-gray-800 form-control" id="minLotSize" placeholder="0.1" defaultValue={symbol.minLotSize} required onchange={onInputChange} />

                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="border-dark p-2 modal-footer">
                                {
                                    error
                                        ? <div className="alert alert-danger">{error}</div>
                                        : <React.Fragment></React.Fragment>
                                }
                                <button type="submit" className="btn btn-sm-1 btn-primary" data-bs-toggle="modal" data-bs-target="#modalSymbol">
                                    Save
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SymbolModal;