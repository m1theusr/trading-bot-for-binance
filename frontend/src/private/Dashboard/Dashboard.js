import React, {useState} from 'react';
import useWebsocket from 'react-use-websocket';
import Menu from '../../components/Menu/Menu';
import LineChart from './LineChart';
import MiniTicker from './MiniTicker/MiniTicker';

function Dashboard(){

    const [miniTickerState, setMiniTickerState] = useState({});

    const {lastJsonMessage } = useWebsocket(process.env.REACT_APP_WS_URL, {
        onOpen: () => console.log(`Connected to app Web Server`),
        onMessage: () => {
            if(lastJsonMessage){
                if(lastJsonMessage.miniTicker) setMiniTickerState(lastJsonMessage.miniTicker);   
            }
        },
        queryParams: {},
        onError: (err) => console.error(err),
        shouldReconnect: (CloseEvent) => true,
        reconnectInterval: 3000
    })

    return(
        <React.Fragment>
            <Menu />
            <main className="text-gray-300 bg-gray-800 content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-2 mb mb-0">
                        <h2 className="h4">Dashboard</h2>
                    </div>
                </div>
                <LineChart />
                <MiniTicker data={miniTickerState}/>
            </main>
        </React.Fragment>
        
        );

}

export default Dashboard;