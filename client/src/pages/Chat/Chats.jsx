import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import './chat.css';

function Chats() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      console.log("messages", messages)
      setIsLoading(true); // Show loading state
      const response = await axios.get('http://localhost:3000/messages'); // Use Axios for GET request
      const data = response.data; // Axios response data is stored in the 'data' property
      setMessages(data.messages);
      setIsLoading(false); // Hide loading state
    } catch (error) {
      console.error('Error fetching messages:', error);
      setIsLoading(false); // Hide loading state on error
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/messages', { // Use Axios for POST request
        sender: 'you', // Replace 'you' with the actual sender's name or user ID
        text: inputMessage,
      });
      const newMessage = response.data; // Axios response data is stored in the 'data' property
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage(''); // Clear the input field after sending the message
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle the error and provide feedback to the user if needed
    }
  };

  console.log("messages", messages);

  return (
    <>
      <div className="app">
        <div className='screen chat-screen active '>
          <div className='header'>
            <div className="logo">Chatroom</div>
            <button id='exit-chat'>Exit</button>
          </div>
          <div className="messages">
            {!isLoading && messages ? (
              messages &&
              messages.map((message, index) => (
                <div
                  key={index}
                  className={message.sender === 'you' ? 'message my-message' : 'message other-message'}
                >
                  <div className='rounded-3xl w-[100px]'>
                    <div className='text-gray-400'>{message.sender}</div>
                    <div className='text'>{message.text}</div>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading messages...</div>
            )}
          </div>
          <div className='typebox'>
            <input
              type='text'
              id='message-input'
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button id='send-message' onClick={sendMessage}>Send</button>
          </div>
          
          
        </div>
        <div className=' typebox' >
          <input type='text'  id='message-input' />
          <button id='send-message'>Send</button>
 
        </div>
      </div>
    </>
  );
}

export default Chats;
