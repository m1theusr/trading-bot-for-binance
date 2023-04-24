import React, { useState } from 'react';
import useWebsocket from 'react-use-websocket';
import Menu from '../../components/Menu/Menu';
import MiniTicker from './MiniTicker/MiniTicker';
import BookTicker from './bookTicker/BookTicker';
import Wallet from './Wallet/Wallet';
import CandleChart from './CandleChart';

function Dashboard() {

    const [miniTickerState, setMiniTickerState] = useState({});
    
    const [bookState, setBookState] = useState({});

    const { lastJsonMessage } = useWebsocket(process.env.REACT_APP_WS_URL, {
        onOpen: () => console.log(`Connected to app Web Server`),
        onMessage: () => {
            if (lastJsonMessage) {
                if (lastJsonMessage.miniTicker) setMiniTickerState(lastJsonMessage.miniTicker);
                if(lastJsonMessage.book) {
                    lastJsonMessage.book.forEach(b => bookState[b.symbol] = b);
                    setBookState(bookState);
                } 
            }
        },
        queryParams: {"token": localStorage.getItem('token')},
        onError: (err) => console.error(err),
        shouldReconnect: (CloseEvent) => true,
        reconnectInterval: 3000
    })

    return (
        <React.Fragment>
            <Menu />
            <main className="text-gray-300 bg-dark content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-2 mb mb-0">
                        <h2 className="h4">Dashboard</h2>
                    </div>
                </div>
                <CandleChart symbol="BTCUSD" />
                <MiniTicker data={miniTickerState} />
                <div className="row">
                <BookTicker data={bookState} />
                <Wallet  />
                </div>

            </main>
        </React.Fragment>

    );

}

export default Dashboard;