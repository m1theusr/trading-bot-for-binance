import React from 'react';

/**
 * props
 * - data
 */
function TickerRow(props){
    return(
    <React.Fragment>
        <p>{props.data}</p>
    </React.Fragment>
    )

}

export default TickerRow;