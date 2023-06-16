// chatroomController.js

const connection = require('../../config/dbConfig');

const createChatroom = async (name) => {
  try {
    const query = 'INSERT INTO chatroom (name, created_by, created_at) VALUES (?, ?, NOW())';
    const [result] = await connection.query(query, [name]);
    return result.insertId;
  } catch (error) {
    throw new Error('Failed to create chatroom');
  }
};

module.exports = {
  createChatroom,
};
