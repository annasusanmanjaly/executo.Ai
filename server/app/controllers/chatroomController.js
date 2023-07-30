const connection = require('../../config/dbConfig');
const userModel = require('../models/userModel');

const createChatRoom = async (name, userId) => {
  const query = 'INSERT INTO chatroom (name, created_at, created_by) VALUES (?, NOW(), ?)';
  try {
    const result = await connection.promise().query(query, [name, userId]);

    return result.insertId;
  } catch (error) {
    console.error('Failed to create chatroom:', error);
    return null;
  }
};

module.exports = {
  createChatRoom,
};