// chatroomModel.js

const connection = require('../../config/dbConfig')

const getChatroomByName = async (name) => {
  try {
    const query = 'SELECT * FROM chatroom WHERE name = ?';
    const [rows] = await connection.query(query, [name]);
    return rows[0]; // Assuming the name is unique, return the first row
  } catch (error) {
    throw new Error('Failed to fetch chatroom');
  }
};

module.exports = {
  getChatroomByName,
};
