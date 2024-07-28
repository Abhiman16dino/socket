const http = require('http');
const ws = require('ws');

const server = http.createServer((req, res) => {
  res.end('I am connected');
});

const wss = new ws.WebSocketServer({server});

wss.on('headers', (headers, res) => {
    console.log(headers);
});

wss.on('connection', (websocket, req) => {
    // console.log(req);
    websocket.send('Welcome to the websocket server!!');

    websocket.on('message', (msg) => {
        console.log(msg.toString());
    });
});

server.listen(8000);