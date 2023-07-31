const connection = require('../../config/dbConfig');
const userModel = require('../models/userModel');

const createChatRoom = async (name, userId) => {
  const query = 'INSERT INTO chatroom (name, created_at, created_by) VALUES (?, NOW(), ?)';
  try {
    const result = await connection.promise().query(query, [name, userId]);
    console.log(result);
    return result.insertId;
  } catch (error) {
    console.error('Failed to create chatroom:', error);
    return null;
  }
};

const joinChatRoom = async (id, userId) => {
  const query = 'INSERT IGNORE INTO chatroom_users (chatroom_id, user_id) VALUES (?, ?)';
  try {
    const result = await connection.promise().query(query, [id, userId]);
    if (result.affectedRows > 0) {
      console.log(`User ${userId} joined chatroom ${id}`);
      return true; // Return a success flag if the user successfully joins the chatroom
    } else {
      console.log(`User ${userId} is already a member of chatroom ${id}`);
      return false; // Return a flag indicating that the user is already a member
    }
  } catch (error) {
    console.error('Failed to join chatroom:', error);
    return false; // Return a failure flag if there's an error joining the chatroom
  }
};


module.exports = {
  createChatRoom,
  joinChatRoom,
};
