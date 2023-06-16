// chatroomModel.js

const connection = require('../../config/dbConfig')

const getChatroomById = async (id) => {
  try {
    const query = 'SELECT * FROM chatroom WHERE id = ?';
    const [result] =  connection.query(query, [id]);
    return result[0];
  } catch (error) {
    throw new Error('Failed to get chatroom by ID');
  }
};

module.exports = {
  getChatroomById,
};
