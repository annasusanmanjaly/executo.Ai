import React,{useState,useEffect} from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Topnav from '../../components/Topnav/Topnav';
import chat from '../../assets/chat.png'
import { useNavigate } from 'react-router-dom'
import { useSocket } from '../../context/Socketprovider';
function Chatroom() {
  
  const [room,setRoom] = useState('')
  console.log(room)
  const navigate = useNavigate()
  const socket = useSocket()
  const [createRoomTriggered,setCreateRoomTriggered] = useState(null)
  const [joinRoomTriggered,setJoinRoomTriggered] = useState(null)

  const handleCreate = () => {
    if (room) {
      // Emit the room name to the backend
      // const socket = io(); // Assumes your server is running on the same host
      socket.emit('createRoom', room);
      setCreateRoomTriggered(true)
      navigate(`/chatroom/${room}`);
    }
  };

  const handleJoin = ()=>{
    if (room) {
      // Emit the room name to the backend
      // const socket = io(); // Assumes your server is running on the same host
      socket.emit('joinRoom', room);
      setJoinRoomTriggered(true)
      navigate(`/chatroom/${room}`);
    }
  }
  useEffect(() => {
    // Register event listeners and clean up
  
    if (createRoomTriggered) {
      socket.on('createRoom', handleCreate);
    }
  
    if (joinRoomTriggered) {
      socket.on('joinRoom', handleJoin);
    }
  
    return () => {
      // Unregister event listeners
      socket.off('createRoom', handleCreate);
      socket.off('joinRoom', handleJoin);
    };
  }, [socket, createRoomTriggered, joinRoomTriggered]);


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
            onChange={(e)=>setRoom(e.target.value)}
            /> 
            <button className='h-[3rem] w-[22rem] bg-[#43C59D] rounded-md text-white text-lg  mt-[5rem] ' onClick={handleCreate}>Create Room</button>
            <p className='my-2'>OR</p>
            <button className='h-[3rem] w-[22rem] bg-[#43C59D] rounded-md text-white text-lg  !mt-0 mb-[3rem]' onClick={handleJoin}>Join room</button>
        </div>
        <BottomNav/>
    </div>
  )
}

export default Chatroom