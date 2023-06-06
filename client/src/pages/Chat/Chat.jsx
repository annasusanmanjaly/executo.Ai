import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Topnav from '../../components/Topnav/Topnav';
import chat from '../../assets/chat.png'

function Chat() {
  return (
    <div className='bg-[#F3F3F3] h-screen w-screen flex pr-3 flex-col'>
        <Topnav/>
        <div className='flex justify-center'>
            <img src={chat} alt="chat" className='h-[15rem] w-[9.5rem] mb-[2rem]' />
        </div>
        <div className='flex items-center flex-col bg-white w-screen rounded-3xl shadow'>
            <h2 className='pt-5 font-bold text-[#1F695D] text-3xl pb-10'>Enter the room name</h2>
            <input className='h-[3rem] w-[22rem] outline-none mt-4 rounded-md bg-gray-100 px-4  shadow-inner border'
            type='text'
            placeholder='Room name'
            /> 
            <button className='h-[3rem] w-[22rem] bg-[#43C59D] rounded-md text-white text-lg  mt-[7rem] mb-[3rem]'>Create Room</button>
        </div>
        <BottomNav/>
    </div>
  )
}

export default Chat