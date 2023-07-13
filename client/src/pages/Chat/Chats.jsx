import React from 'react'

function Chats() {
  return (
    <div className='m-0 p-0 box-border'>
      <div className='font-roboto h-screen flex justify-center'>
    <div className='fixed w-full h-full max-w-3xl bg-white border-l border-r border-gray-300'>
      
      <div className='screen chat-screen active'>
        
        <div className='bg-black h-16 flex justify-between items-center px-5'>
          <div className='text-xs text-black font-bold'>Chatroom</div>
          <button id='exit-chat' className='px-2 py-1 border border-gray-300 bg-transparent text-gray-300 text-sm cursor-pointer focus:outline-none'>Exit</button>
        </div>
        <div class='w-full h-[calc(100vh - 100px)] bg-gray-200 overflow-auto'>
          <div className='flex p-4'>
            <div>
              <div className='name'>You</div>
              <div className='text'>Hi</div>
            </div>
          </div>
          <div className='update'>
            abc is jointed the conversation
          </div>
          <div className='message other-message'>
            <div>
              <div className='name'>Abc</div>
              <div className='text'>Hi</div>
            </div>
          </div>
        </div>
        <div className='typebox'>
          <input type='text'  id='message-input'/>
          <button id='send-message'>Send</button>

        </div>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Chats
