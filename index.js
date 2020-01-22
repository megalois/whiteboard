const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  socket.on('paperEvent', (event) => {
    socket.broadcast.emit('paperEvent', event);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
