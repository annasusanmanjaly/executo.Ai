// chatroomService.js

const chatroomModel = require('../models/chatroomModel');
const chatroomController = require('../controllers/chatroomController');

const createChatroom = async (name) => {
  try {
    const chatroomId = await chatroomController.createChatroom(name);
    const chatroom = await chatroomModel.getChatroomById(chatroomId);
    return chatroom;
  } catch (error) {
    throw new Error('Failed to create chatroom');
  }
};

module.exports = {
  createChatroom,
};
