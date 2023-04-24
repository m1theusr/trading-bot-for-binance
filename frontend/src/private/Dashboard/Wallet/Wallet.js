import React, { useState, useEffect } from 'react';
import { getBalance } from '../../../services/ExchangeService';
import { useHistory } from 'react-router-dom';
import '../Dashboard.css';

/**
 * props: 
 * - data   
 */

function Wallet(props) {

    //    if(!props || props.data) return <React.Fragment></React.Fragment>;

    const history = useHistory();

    const [balances, setBalances] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        getBalance(token)
            .then(info => {

                const balances = Object.entries(info).map(item => {
                    return {
                        symbol: item[0],
                        available: item[1].available,
                        onOrder: item[1].onOrder
                    }
                })



                setBalances(balances)

            })
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/')
                console.error(err);
            })
    }, [props.data])


    return (

        <div className="col-md-6 col-sm-12 mb-4">
            <div className="card border-0 shadow">
                <div className="bg-gray-800 card-header">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs-5 fw-bold-mb-0">Wallet</h2>

                                <input type="text" class="col-4 bg-gray-800 form-control" placeholder="Search your crypto." />


                        </div>
                    </div>
                </div>
                <div className="table-responsibe divScroll">
                    <table className="table align-items-center table-flush table-sm table-hover tableFixHead">
                        <thead className="thead-dark">
                            <tr>
                                <th className="border-bottom" scope="col">SYMBOL</th>
                                <th className="border-bottom" scope="col">FREE</th>
                                <th className="border-bottom" scope="col">LOCK</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            {
                                balances.map(item => (
                                    <tr key={`Wallet${item.symbol}`}>
                                        <td className="text-gray-300">{item.symbol}</td>
                                        <td className="text-gray-300">{item.available.substring(0, 8)}</td>
                                        <td className="text-gray-300">{item.onOrder.substring(0, 8)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}
export default Wallet;