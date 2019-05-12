require('dotenv').config();

const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index')
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
var http = require('http');

var socket_io = require('socket.io');
var io = socket_io();
var socketService = require('./services/socketService.js')(io);


const url = process.env.DATABASEURL;
mongoose.connect(url, { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../public')));
app.use ('/', indexRouter);
app.use('/api/v1', restRouter);

app.use('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var server = http.createServer(app);
io.attach(server);
server.listen(3000);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    throw error;
}

function onListening() {
    var addr = server.address();
    var bind = typeof adr == 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
