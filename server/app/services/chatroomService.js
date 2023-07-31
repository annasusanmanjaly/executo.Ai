const chatroomModel = require('../models/chatroomModel');
const chatroomController = require('../controllers/chatroomController');
const { getUserByPhoneNumber } = require('../models/userModel');

const createChatroom = async (name, userData) => {
  try {
    const chatroom = await chatroomModel.getChatroomByName(name);
    chatroom
      ? chatroomController.joinChatRoom(name, userData)
      : chatroomController.createChatRoom(name, userData);
  } catch (error) {
    console.error('Failed to create chatroom:', error);
    throw new Error('Failed to create chatroom');
  }
};

module.exports = {
  createChatroom,
};
