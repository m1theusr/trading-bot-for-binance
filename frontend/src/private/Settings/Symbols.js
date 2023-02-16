import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols } from '../../services/SymbolsService';

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);

    const [error, setError] = useState('');

    const [success, setSuccess] = useState('');

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
    }, []);
    return (<React.Fragment>

        {JSON.stringify(symbols)}

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
                                <thead className=" thead-dark">
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
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        {error
            ? <div className="alert alert-danger">{error} </div>
            : <React.Fragment></React.Fragment>

        }

    </React.Fragment>);

}
export default Symbols;