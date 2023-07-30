const chatroomModel = require('../models/chatroomModel');
const chatroomController = require('../controllers/chatroomController');
const { getUserByPhoneNumber } = require('../models/userModel');

const createChatroomService = (name, userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const chatroom = await chatroomModel.getChatroomByName(name);
      const user = await getUserByPhoneNumber(userData.phoneNumber);
      // console.log(user);
      const userId = user.id;
      if (chatroom) {
        await chatroomController.joinChatRoom(name, userId);
      } else {
        await chatroomController.createChatRoom(name, userId);
      }
      resolve(); // Resolve the Promise since the operation is successful
    } catch (error) {
      console.error('Failed to create chatroom:', error);
      reject(new Error('Failed to create chatroom')); // Reject the Promise with an error if there's an issue
    }
  });
};

module.exports = {
  createChatroomService,
};
