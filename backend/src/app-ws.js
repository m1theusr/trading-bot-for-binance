const WebSocket = require ('ws');

function onMessage(data){
    console.log(`OnMessage: ${data}`);
}  

function onError(){
    console.error(`OnError: ${err.message}`);
}

function onConnection(ws, req){

    ws.on('message', onMessage );
    ws.on('error', onError );
    console.log(`onConnection`)
}

module.exports = (server) => {

    const wss = new WebSocket.Server({
        server
    });

    wss.on('connection', onConnection);
    console.log(`APP WebSocket server is Running!`);
    return wss;
    
}