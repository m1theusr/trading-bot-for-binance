import React, {useState, useEffect} from 'react';
import SelectQuote from '../../../components/SelectQuote/SelectQuote';
import TickerRow from './TickerRow';
import {getSymbols} from '../../../services/SymbolsService';
import { useHistory } from 'react-router-dom';
/**
 * props: 
 * - data   
 */

function MiniTicker(props){

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);

    const [quote, setQuote] = useState('');

    if(!props || !props.data) return (<React.Fragment></React.Fragment>);

    useEffect(() =>{
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => setSymbols())
            .catch(err =>{
                if(err.response && err.response.status === 401) return history.push('/')
                console.error(err);
            })
    }, [quote])

    function onQuoteChange(event){
        setQuote(event.target.value);
    }

    return(
        <div className="col-12 mb-4">
            <div className="bg-dark card border-0 shadow">
                <div className="card-header">
                    <div className="row">
                            <div className="col">
                                <h2 className="fs-5 fw-bold mb-0">Market 24Hrs</h2>
                            </div>
                            <div className="col offset-md-3">
                            <SelectQuote onChange={onQuoteChange} />
                            </div>   
                    </div>
                    <div className="table-responsive">
                        <table className="table align-items-center table flush table-sm table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="border-bottom" scope="col">SYMBOL</th>
                                    <th className="border-bottom col-2" scope="col">CLOSE</th>
                                    <th className="border-bottom col-2" scope="col">OPEN</th>
                                    <th className="border-bottom col-2" scope="col">HIGH</th>
                                    <th className="border-bottom col-2" scope="col">LOW</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Object.entries(props.data).map(item =>(
                                <TickerRow data={item[0]} />
                            ))
                            
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        
    )
}
export default MiniTicker;