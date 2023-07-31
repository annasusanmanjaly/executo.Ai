const connection = require('../../config/dbConfig');
const userModel = require('../models/userModel');

const createChatRoom = async (name, userId) => {
  const query = 'INSERT INTO chatroom (name, created_at, created_by) VALUES (?, NOW(), ?)';
  try {
    const query = 'INSERT INTO chatroom (name, created_at) VALUES (?, NOW())';
    const [result] = await connection.promise().query(query, [name]);
    return result.insertId;
  } catch (error) {
    console.error('Failed to create chatroom:', error);
    throw new Error('Failed to create chatroom');
  }
};

const joinChatRoom = async (name, userData) => {
  try {
    const user = await userModel.getUserByPhoneNumber(userData.phoneNumber);
    const userId = user.id;
    const query = 'INSERT INTO chatroom_user (chatroom_id, user_id) VALUES (?, ?)';
    await connection.promise().query(query, [name, userId]);
    console.log(`User ${userId} joined chatroom ${name}`);
  } catch (error) {
    console.error('Failed to join chatroom:', error);
    throw new Error('Failed to join chatroom');
  }
};


module.exports = {
  createChatRoom,
};