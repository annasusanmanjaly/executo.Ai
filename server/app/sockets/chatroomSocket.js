// chatroomSocket.js

const chatroomService = require('../services/chatroomService');

const handleChatroomSocket = (io) => {
    // console.log(io)
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('createRoom', async (room) => {
      try {
        socket.join(room);
        console.log(`Socket ${socket.id} joined room ${room}`);

        // Store room information in the database
        await chatroomService.createChatroom(room);

        // Broadcast a message to all clients in the room
        io.to(room).emit('userJoined', { room, userId: socket.id });
      } catch (error) {
        console.log(error);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = handleChatroomSocket;
