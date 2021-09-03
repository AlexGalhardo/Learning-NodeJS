const WebSocket = require('ws');

// const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
const ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcusdt@ticker');

ws.on('message', (data) => {
    if (data) {
        const trade = JSON.parse(data); // parsing single-trade record
        response = {
            Symbol: trade.data.s,
            Open: trade.data.o,
            High: trade.data.h,
            Low: trade.data.l,
            Last: trade.data.c,
            ChangePercentage: trade.data.P
        }
        console.log(response);
    }
});
