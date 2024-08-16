// Desc: Chat server using socket.io

const express = require('express');
const socketio = require('socket.io');

const app = express();

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on('connection', (socket)=>{             // get the socket who triggered even on whole io server
    console.log('Server created with socket id = ', socket.id);

    socket.on('newMessageToServer', (msg)=>{                // respond to that particular socket event
        console.log('New message from client: ', msg);
        io.emit('newMessageToClients', {text: msg.text});    // emit event for all the sockets on io sercer and not the only one who triggered the event
    }); // Listen for new message from client
});
