var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const path = require('path');

server.listen();

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/Client/index.html'));
});
io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


