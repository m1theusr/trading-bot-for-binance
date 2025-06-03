const Binance = require('node-binance-api');

module.exports = (settings) => {
    if(!settings) throw new Error('The settings object is required to connect on exchange');

    // Remove a barra final das URLs se existir
    const apiUrl = settings.apiUrl.endsWith('/') ? settings.apiUrl.slice(0, -1) : settings.apiUrl;
    const streamUrl = settings.streamUrl.endsWith('/') ? settings.streamUrl.slice(0, -1) : settings.streamUrl;

    const binance = new Binance({
        APIKEY: settings.accessKey,
        APISECRET: settings.secretKey,
        family: 0,
        urls: {
            base: apiUrl,
            stream: streamUrl
        },
        // Adiciona opções específicas para a Testnet
        test: true,
        verbose: true
    });

    function balance() {
        return binance.balance();
    }

    function exchangeInfo() {
        return binance.exchangeInfo();
    }

    function miniTickerStream(callback) {
        // Usa o endpoint ticker@arr em vez de miniTicker
        binance.websockets.trades(['BTCBUSD'], (trades) => {
            callback(trades);
        });
    }

    function userDataStream(balanceCallback, executionCallback, listStatusCallback) {
        binance.websockets.userData(
            balance => {
                console.log('Balance update:', balance);
                balanceCallback(balance);
            },
            executionData => {
                console.log('Execution update:', executionData);
                executionCallback(executionData);
            },
            subscribedData => {
                console.log('Stream subscribed:', subscribedData);
            },
            listStatusData => {
                console.log('List status:', listStatusData);
                if (listStatusCallback) listStatusCallback(listStatusData);
            }
        );
    }

    return {
        exchangeInfo,
        miniTickerStream,
        userDataStream,
        balance
    };
}