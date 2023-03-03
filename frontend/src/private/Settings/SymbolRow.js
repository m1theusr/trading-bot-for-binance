import React from 'react';

/**
 * props.data
 * - symbol
 * - basePrecision
 * - quotePrecisiion
 * - minNoticional
 * - minLotSize
 * - isFavorite
 */

function SymbolRow(props) {
    return (
        <tr className="bg-gray-900">
            <td className="text-white">
                {props.data.symbol}
                {props.data.isFavorite
                    ? <svg className="icon icon-xs" fill="yellow" stroke="orange" stroke-width="2.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                  </svg>

                    : <React.Fragment></React.Fragment>
                }
            </td>

            <td className="text-white">
                {props.data.basePrecision}
            </td>
            <td className="text-white">
                {props.data.quotePrecision}
            </td>
            <td className="text-white">
                {props.data.minNotional}
            </td>
            <td className="text-white">
                {props.data.minLotSize}
            </td>
            <td>
                <button id={"edit" + props.data.symbol} className="btn btn-warning" width={20}>
                    <svg id={"edit" + props.data.symbol} className="icon icon-xs" fill="none" stroke="CurrentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                    </svg>
                </button>
            </td>
        </tr>
    );

}

export default SymbolRow;