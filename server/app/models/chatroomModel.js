
const connection = require('../../config/dbConfig');

// Function to get all messages
function getAllMessages() {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to retrieve all messages
    const query = 'SELECT * FROM messages';
    connection.promise().query(query)
      .then(([rows]) => {
        const messages = rows;
        console.log(messages); // Print the messages (optional)
        resolve(messages);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Function to get a chatroom by name
function getChatroomByName(name) {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to get a chatroom by name
    const query = 'SELECT * FROM chatroom WHERE name = ?';
    connection.promise().query(query, [name])
      .then(([rows]) => {
        const chatroom = rows.length ? rows[0] : null;
        resolve(chatroom);
      })
      .catch((error) => {
        console.error('Failed to fetch chatroom:', error);
        reject(new Error('Failed to fetch chatroom'));
      });
  });
}

// Function to insert a new message into the database
function insertMessage(sender, text) {
  return new Promise((resolve, reject) => {
    // Perform the necessary database query to insert a new message
    const query = 'INSERT INTO messages (sender, text, timestamp) VALUES (?, ?, NOW())';
    connection.promise().query(query, [sender, text])
      .then(([result]) => {
        const newMessage = {
          id: result.insertId,
          sender,
          text,
          timestamp: new Date().toISOString(),
        };
        console.log(newMessage); // Print the new message (optional)
        resolve(newMessage);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = {
  getAllMessages,
  insertMessage,
  getChatroomByName,
};
