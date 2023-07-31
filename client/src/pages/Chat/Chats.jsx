import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useParams, useLocation } from 'react-router-dom';
import './chat.css';

function Chats() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { roomId } = useParams(); // Get the chatroomName from the URL
  const userData = JSON.parse(localStorage.getItem('userData'));
  const phn = userData.phoneNumber
  console.log("phn", phn)
  const location = useLocation();
  // Rest of your code...
  console.log("chatroomName", roomId)

  const handleExitChat = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/messages`, {
        data: {
          phoneNumber: phn,
          chatroomName: roomId,
        },
      });

      if (response.status === 200 && response.statusText === "OK") {
        console.log('Chatroom exit successful.');
        window.location.replace("/chatroom");
        // Perform any additional actions or cleanup on exiting the chatroom
      } else {
        console.log('Unexpected response:', response.status, response.statusText);
        // Handle unexpected responses here
      }
    } catch (error) {
      console.error('Error exiting chat:', error);
      // Handle the error and provide feedback to the user if needed
    }
  };








  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      console.log("messages", messages);
      setIsLoading(true); // Show loading state
      const response = await axios.get('http://localhost:3000/messages', {
        roomId: roomId,
      }); // Use Axios for GET request
      const data = response.data; // Axios response data is stored in the 'data' property
      setMessages(data.messages);
      setIsLoading(false); // Hide loading state
    } catch (error) {
      console.error('Error fetching messages:', error);
      setIsLoading(false); // Hide loading state on error
    }
  };

  const getPhoneNumber = () => {
    // Get the phone number from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData?.phoneNumber || ''; // Return an empty string if userData is not available
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/messages', { // Use Axios for POST request
        phoneNumber: phn, // Replace 'you' with the actual sender's name or user ID
        message: inputMessage,
        roomId: roomId
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
            <button id='exit-chat' onClick={handleExitChat}>Exit</button>
          </div>
          <div className="messages">
            {!isLoading && messages ? (
              messages &&
              messages.map((message, index) => (
                <div
                  key={index}
                  className={message.userId === "uo" ? 'message my-message' : 'message other-message'}
                >
                  <div className='rounded-3xl w-[100px]'>
                    <div className='text-gray-400'>{message.userId}</div>
                    <div className='text'>{message.message}</div>
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
          <input type='text' id='message-input' />
          <button id='send-message'>Send</button>

        </div>
      </div>
    </>
  );
}

export default Chats;
