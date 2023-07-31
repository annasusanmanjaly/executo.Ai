import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';
import quote from '../../assets/quote.png';
import shade from '../../assets/shade.png';
import anim1 from '../../assets/anim1.png';
import anim2 from '../../assets/anim2.png';
import { AiFillPlusCircle } from "react-icons/ai";
import Topnav from '../../components/Topnav/Topnav';
import Taskbox from '../../components/Taskbox/Taskbox';

function Home() {
  return (
    <div>
      <div>
        <Topnav />
        <div className='mr-5'>
          <b><h2 className='text-[#1F695D] text-2xl ml-4 '>Quote of the day</h2></b>
          <div className="relative inline-block mt-5">
            <img src={shade} alt='shade' className='absolute  ml-[1.2rem] w-[349px] h-full opacity-50' />
            <img src={quote} alt='quote' className=' ml-[1.2rem] w-[349px]' />
          </div>
        </div>
        <div className='flex flex-row'>
          <b><h2 className='text-[#1F695D] text-2xl ml-4 mt-6'>Today your task</h2></b>
          <Link to="/goals">
            <p className='text-[blue] ml-[7rem] mt-[1.5rem]'>view All</p>
           
          </Link>
          </div>
        <div> <img src={anim1} alt='quote' className='ml-4 ' /></div>
       
        <div  className='flex flex-row'>
          <b><h2 className='text-[#1F695D] text-2xl ml-4 mt-6'>Find your community</h2></b>
          <Link to="/chatroom">
            <p className='text-[blue]  ml-[5rem] mt-[1.5rem]'>view </p>
           
          </Link>
        
          </div>
          <div>  <img src={anim2} alt='quote' className='ml-4' /></div>
     
      <Link to="/Addtask">
        <AiFillPlusCircle className='text-[#43C59D] text-6xl ml-auto mr-5 mt-[-60px]' />
      </Link>
      <BottomNav />
    </div>
    </div>
    
  )
}

export default Home