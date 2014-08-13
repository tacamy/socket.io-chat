var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

var socketio = require('socket.io');
var io = socketio.listen(server);

io.sockets.on('connection', function (socket) {
  socket.on('send', function (data) {
    socket.emit('message', data);
    socket.broadcast.emit('message', data);
  });
});

server.listen(3000);

console.log('listening on port 3000');
