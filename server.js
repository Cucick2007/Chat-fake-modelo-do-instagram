const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// cliente conecta ao servidor pelo Socket.io
io.on('connection', (socket) => {
console.log('Usuário conectado');
  socket.on('chat message', (data) => io.emit('chat message', data));

  // cliente desconecta do servidor
  socket.on('disconnect', () => console.log('Usuário desconectado'));
});

// Inicia o servidor na porta 3000
http.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000 - Link http://localhost:3000`);
});
