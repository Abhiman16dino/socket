const express = require('express');
const socketio = require('socket.io');
const app = express();

app.use(express.static(__dirname + '/public')); // serve static files

const expressServer = app.listen(8000);  // Create a server
const io = socketio(expressServer); // Create a socket server; Give server to socket.io


io.on('connection', (socket) => {    // Listen for connection event, when connected it returns the socket object which can listen and emit events
    console.log(socket.id, 'connected'); // Every time browser refresh new socket id is created, so later we will try to remember the user and not create a socket id everytime

    socket.emit('messageFromServer', {data: 'Welcome to the socket.io server'});

    socket.on('messageFromClient' , (data) => {
        console.log(data);
    })

});