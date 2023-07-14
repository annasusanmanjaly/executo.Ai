import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';
import quote from '../../assets/quote.png';
import tasks2 from '../../assets/tasks2.png';
import tasks3 from '../../assets/task3.png';
import {AiFillPlusCircle } from "react-icons/ai";
import Topnav from '../../components/Topnav/Topnav';
import Taskbox from '../../components/Taskbox/Taskbox';

function Home() {
  return (
    <div>
      <div>
        <Topnav/>
       <div className='mr-5'>
        <b><h2 className='text-[#1F695D] text-2xl ml-4 mt-10'>Quote of the day</h2></b>
        <img src={quote} alt='quote' className='mt-2 ml-2' />
       </div>
       <div className='flex flex-row'>
       <b><h2 className='text-[#1F695D] text-2xl ml-4 mt-6'>Today your task</h2></b>
       <Link to="/Addtask">
       <p className=' text-[blue] ml-[7rem] mt-[1.5rem]' >view All </p>
       </Link>
       </div>
       
       <Taskbox/>
       <img src={tasks2} alt="tasks2" className='ml-[11.5rem] mt-[-8.5rem] w-[168px] h-[138px]'/>
       <img src={tasks3} alt="tasks3" className='ml-[22.5rem] mt-[-8.5rem]  '/>
      </div>
      <Link to="/Addtask">
       <AiFillPlusCircle className='text-[#43C59D] text-5xl ml-auto mr-5 mt-[10rem]'/>
       </Link>
      <BottomNav/>
    </div>
  )
}

export default Home
