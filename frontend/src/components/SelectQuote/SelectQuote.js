import React, { useState } from 'react';

/**
 * 
 * @param {*} props 
 * onChange
 * @returns 
 */


function SelectQuote(props) {

    const [defaultQuote, setDefaultQuote] = useState(getDefaultQuote());

    return (
        <select id="selectQuote" className="form-select bg-gray-900 text-white" defaultValue={defaultQuote} onChange={props.onChange}>
            <option value="FAVORITES">Favorites</option>
            <option value="BNB">BNB</option>
            <option value="BRL">BRL</option>
            <option value="BTC">BTC</option>
            <option value="USD">USD</option>
            <option value="USDT">USDT</option>
        </select>
    )

}

export function filterSymbolObjects(symbols, quote) {
    return symbols.filter(s => {
        if (quote === 'FAVORITES')
            return s.IsFavorite;
        else
            return s.symbol.endsWith(quote);
    })

}

export function getDefaultQuote() {
    return localStorage.getItem("defaultQuote") ? localStorage.getItem("defaultQuote") : "USD";
}

export default SelectQuote;