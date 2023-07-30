const chatroomModel = require('../models/chatroomModel');

// Function to get all messages
async function getAllMessages(req, res) {
  try {
    // Retrieve all messages from the database
    const messages = await chatroomModel.getAllMessages();

    if (messages.length > 0) {
      // Handle the retrieved messages as needed
      res.status(200).json({ messages });
    } else {
      // No messages found in the database
      console.log('No messages found');
      res.status(404).json({ error: 'No messages found' });
    }
  } catch (error) {
    console.error('Error during retrieving messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Function to send a new message
async function sendMessage(req, res) {
  try {
    const { sender, text } = req.body;
    if (!sender || !text) {
      return res.status(400).json({ error: 'Sender and text are required fields.' });
    }

    // Get the current timestamp in the correct format
    const timestamp = new Date().toISOString();

    // Insert the new message into the database
    const newMessage = await chatroomModel.insertMessage(sender, text, timestamp);

    // Handle the new message as needed
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function exitChatroom(req, res) {
  return new Promise(async (resolve, reject) => {
    try {
      const { phoneNumber, chatroomName } = req.body;
      console.log("PhoneNumber:", phoneNumber);
      console.log("ChatroomName:", chatroomName);

      // Call the exitChatroomModel function to delete the user from the chatroom_users table
      await chatroomModel.exitChatroomModel(chatroomName, phoneNumber);

      // Send a successful response with status code 200
      res.sendStatus(200);
      resolve(); // Resolve the Promise if the operation is successful
    } catch (error) {
      console.error('Error exiting chatroom:', error);

      // Send an error response with status code 500 and the error message in JSON format
      res.status(500).json({ error: 'Internal server error' });
      reject(error); // Reject the Promise with an error if there's an issue
    }
  });
}

module.exports = {
  getAllMessages,
  sendMessage,
  exitChatroom
};
