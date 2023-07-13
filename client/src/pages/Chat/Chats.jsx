import React from 'react'
import './chat.css';
function Chats() {
  return (
    <>
    <div className="app">
      
      
      <div className='screen chat-screen active '>
        
        <div className='header'>
          <div className="logo">Chatroom</div>
          <button id='exit-chat'>Exit</button>
        </div>
        <div className="messages">
        <div className='update'>
            abc is jointed the conversation
          </div>
          <div className='message other-message'>
            <div className='rounded-2xl'>
              <div className='text-gray-400'>Abc</div>
              <div className='text'>Hi</div>
            </div>
          </div>
          <div className="message my-message">
            <div className='rounded-2xl'> 
              <div className='text-gray-400'>you</div>
              <div className='text'>Hi</div>
            </div>
          </div>
          
          
        </div>
        <div className=' typebox' >
          <input type='text'  id='message-input'/>
          <button id='send-message'>Send</button>
 
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Chats
