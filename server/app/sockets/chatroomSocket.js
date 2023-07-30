const chatroomService = require('../services/chatroomService');

const handleChatroomSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinRoom', async (payload) => {
      try {
        const { room, userData } = payload;
        socket.join(room);
        console.log(userData)
        console.log(`Socket ${socket.id} joined room ${room}`);

        // Store room information in the database
        const chatid = await chatroomService.createChatroomService(room,userData);
        console.log(chatid)

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
