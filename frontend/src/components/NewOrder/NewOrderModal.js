import React, { useRef, useState } from "react";
import SelectSymbol from "./SelectSymbol";
import SymbolPrice from "./SymbolPrice";
import WalletSummary from "./WalletSummary";

function NewOrderModal() {

    const [error, setError] = useState('');

    const DEFAULT_ORDER = {
        symbol: "",
        price: "0",
        stopPrice: "0",
        quantity: "0",
        icebergQty: "0",
        side: "BUY",
        type: "LIMIT",

    }

    const [order, setOrder] = useState(DEFAULT_ORDER)

    const btnClose = useRef('');
    const btnSend = useRef('');

    function onSubmit(event) {

        console.log("click")

    }

    function onInputChange(event) {
        setOrder(prevState => ({ ...prevState, [event.target.id]: event.target.value }));
    }


    return (

        <div className="modal fade" id="modalOrder" tabIndex="-1" role="dialog" aria-labelledby="modalTittleNotify" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="bg-gray-800 text-gray-300 modal-content">
                    <div className="border-dark modal-header">
                        {
                            error
                                ? <div className="alert alert-danger mt-1 col-9 py-1">{error}</div>
                                : <React.Fragment></React.Fragment>
                        }
                        <p className="modal-tittle" id="modalTittleNodify">New Order</p>
                        <button ref={btnClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <SelectSymbol onClick={onInputChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <SymbolPrice symbol={order.symbol} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <WalletSummary />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="border-dark modal-footer">
                        <button ref={btnSend} type="button" className="btn btn-primary" onClick={onSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewOrderModal;