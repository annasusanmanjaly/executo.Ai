const connection = require('../../config/dbConfig');

const getChatroomByName = async (name) => {
  try {
    const query = 'SELECT * FROM chatroom WHERE name = ?';
    const [rows] = await connection.promise().query(query, [name]);
    return rows.length ? rows[0] : null;
  } catch (error) {
    console.error('Failed to fetch chatroom:', error);
    throw new Error('Failed to fetch chatroom');
  }
};

module.exports = {
  getChatroomByName,
};
