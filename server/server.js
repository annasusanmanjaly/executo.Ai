const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
require('dotenv').config();

const authController = require('./app/controllers/authController');
const openaiController = require('./app/controllers/openaiController');
const chatroomService = require('./app/services/chatroomService');
const handleChatroomSocket = require('./app/sockets/chatroomSocket');
const openaiService = require('./app/services/openaiService')
const userDetailController = require('./app/controllers/userDetailController')

app.use(bodyParser.json());
app.use(cors());

app.post('/login', authController.login);
app.post('/verify', authController.verify);
app.post('/prompt', openaiController.generateOpenAIResponse);
app.post('/saveuser',userDetailController.saveUserDetails)
app.get('/goals', openaiService.retrieveGoalsDataMiddleware);


// Socket.io setup

handleChatroomSocket(io);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
