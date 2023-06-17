const connection = require('../../config/dbConfig');
const userModel = require('../models/userModel');

const createChatRoom = async (name, userData) => {
  try {
    const query = 'INSERT INTO chatroom (name, created_by, created_at) VALUES (?, ?, NOW())';
    const [result] = await connection.query(query, [name, createdBy]);
    return result.insertId;
  } catch (error) {
    throw new Error('Failed to create chatroom');
  }
};

const joinChatRoom = async (name, userData) => {
  try {
    const user = await userModel.getUserByPhoneNumber(userData.phoneNumber)
    const userId = user.id
    const query = 'INSERT INTO chatroom_user (chatroom_id, user_id) VALUES (?, ?)';
    await connection.query(query, [name, userId]);
    console.log(`User ${userId} joined chatroom ${roomId}`);
  } catch (error) {
    throw new Error('Failed to join chatroom');
  }
};

module.exports = {
  createChatRoom,
  joinChatRoom,
};
