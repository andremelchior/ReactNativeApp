const express = require("express");
const http = require("http");
const { Server } = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log('Um cliente se conectou');
    socket.on('join_room', (room) => {
        socket.join(room)
        console.log(`cliente entrou no canal ${room}`);
    });
    socket.on('send_message', ({ room, message }) => {
        io.to(room).emit('receive_message', { room, msg: message })
    });
    socket.on('disconnect', () => {
        console.log('um cliente se desconectou')
    });
});
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
