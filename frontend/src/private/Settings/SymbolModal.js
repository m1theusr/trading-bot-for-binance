import React from 'react';

function SymbolModal() {

    function onSubmit(event) {

    }


    return (
        <div className="modal fade " id="modalSymbol" tabIndex="-1" role="dialog" aria-labelledby="modalTittleModify" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-tittle" id="modalTittleModify">Edit Symbol</p>
                        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="close"></button>

                    </div>
                    <form onSubmit={onSubmit} />
                    <div className="modal-body">
                        <div className="py-3">

                        </div>
                    </div>

                    <div className="modal-footer">

                    </div>

                </div>
            </div>

        </div>
    )
}
export default SymbolModal;