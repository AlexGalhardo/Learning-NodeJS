const readlineSync = require('readline-sync');
const symbol = readlineSync.question('Qual o par de moedas deseja monitorar?');
const WebSocket = require('ws');

// const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbrl@bookTicker');
const ws = new WebSocket('wss://stream.binance.com:9443/ws/bookTicker');

ws.onopen = () => {
	ws.send(JSON.stringify({
		'method': 'SUBSCRIBE',
		'params': [
			`${symbol}@bookTicker`
		],
		'id': 1
	}));
}

ws.onmessage = (event) => {
	process.stdout.write('\033c');
	const obj = JSON.parse(event.data);
	console.log(`Symbol: ${obj.s}`);
	console.log(`Best ask: ${obj.a}`);
	console.log(`Best bid: ${obj.b}`);
}