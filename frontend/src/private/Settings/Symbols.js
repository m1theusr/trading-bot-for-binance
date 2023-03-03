import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols, syncSymbols } from '../../services/SymbolsService';
import SymbolRow from './SymbolRow';

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);

    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');

    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => {
                setSymbols(symbols);
            })
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSuccess('');

            })
    }, [isSyncing]);

    function onSyncClick(event) {
        const token = localStorage.getItem('token');
        setIsSyncing(true);
        syncSymbols(token)
            .then(response =>
                setIsSyncing(false)
            )
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSuccess('');

            })

    }
    return (<React.Fragment>

        <div className="row">
            <div className="col-12">
                <div className="col-12 mb-4">
                    <div className="card border-0 shadow">
                        <div className="bg-gray-900 card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h2 className="fs-5 fs-bold mb-0">Symbols</h2>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center table-flush">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="border-bottom" scope="col">Symbol</th>
                                        <th className="border-bottom" scope="col">Base Preci</th>
                                        <th className="border-bottom" scope="col">Quote Preci</th>
                                        <th className="border-bottom" scope="col">Min Notional</th>
                                        <th className="border-bottom" scope="col">Min Lot Size</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {symbols.map(item => <SymbolRow key={item.symbol} data={item} />)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="bg-gray-900" colSpan="12">
                                            <button className="btn btn-primary" type="button" onClick={onSyncClick}>
                                                <svg className="icon icon-xs" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                                                </svg>
                                                {isSyncing
                                                    ? "Syncing..."
                                                    : "Sync"
                                                }
                                                
                                            </button>
                                        </td>
                                        {success
                                            ? <div className="alert alert-success">{success} </div>
                                            : <React.Fragment></React.Fragment>

                                        }
                                        {error
                                            ? <div className="alert alert-danger">{error} </div>
                                            : <React.Fragment></React.Fragment>

                                        }
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    </React.Fragment>);

}
export default Symbols;