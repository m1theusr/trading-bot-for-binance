import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols, syncSymbols } from '../../services/SymbolsService';
import SymbolRow from './SymbolRow';
import SelectQuote, { getDefaultQuote, filterSymbolObjects, setDefaultQuote } from '../../components/SelectQuote/SelectQuote';
import SymbolModal from './SymbolModal';

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);

    const [error, setError] = useState('');

    const [editSymbol, setEditSymbol] = useState({
        symbol: '',
        basePrecision: '',
        quotePrecision: '',
        minLotSize: '',
        minNotional: '',
    });

    const [quote, setQuote] = useState(getDefaultQuote());

    const [success, setSuccess] = useState('');

    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => {
                setSymbols(filterSymbolObjects(symbols, quote));
            })
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSuccess('');

            })
    }, [isSyncing, quote]);

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

    function errorHandling(err) {
        console.error(err.response ? err.response.data : err.message);
        setError(err.response ? err.response.data : err.message);
        setSuccess('');
    }

    function onQuoteChange(event) {
        setQuote(event.target.value);
        setDefaultQuote(event.target.value);
    }

    function onEditSymbol(event) {

        const symbol = event.target.id.replace('edit', '');
        const symbolObj = symbols.find(s => s.symbol === symbol);
        setEditSymbol(symbolObj);
    }


    function loadSymbols() {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => {
                setSymbols(filterSymbolObjects(symbols, quote));
            })
            .catch(err => errorHandling(err))
    }

    useEffect(() => {
        loadSymbols();
    }, [isSyncing, quote])

    function onModalSubmit(event) {
        loadSymbols();
    }

    return (<React.Fragment>

        <div className="row">
            <div className="col-12">
                <div className="col-12 p-0">
                    <div className="card border-0 shadow">
                        <div className="bg-gray-800 card-header">
                            <div className="row align-items-center">
                                {success
                                    ? <div className="alert alert-success">{success}
                                        <buttom className="btn-close" data-bs-dismiss="alert"></buttom>
                                    </div>
                                    : <React.Fragment></React.Fragment>

                                }
                                {error
                                    ? <div className="alert alert-danger">{error}
                                        <buttom className="col btn-close" data-bs-dismiss="alert"></buttom>
                                    </div>
                                    : <React.Fragment></React.Fragment>

                                }
                                <div className="col">
                                    <h2 className="fs-5 fs-bold mb-0">Symbols</h2>
                                </div>
                                <div className="col-3">
                                    <SelectQuote onChange={onQuoteChange} />
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
                                    {symbols.map(item => <SymbolRow key={item.symbol} data={item} onClick={onEditSymbol} />)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="bg-gray-800 border-0" colSpan="6">
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

                                    </tr>

                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <SymbolModal data={editSymbol} onSubmit={onModalSubmit} />

    </React.Fragment>);

}
export default Symbols;