import React from 'react'
import BottomNav from '../../components/BottomNav/BottomNav'
import { BsFillBellFill } from "react-icons/bs";
import quote from '../../assets/quote.png';
import task from '../../assets/task.png';
import {AiFillPlusCircle } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div>
        <h3 className='ml-4 mt-7'>Hi,</h3>
        <div className='flex flex-row'>
       <b> <h2 className='text-[#43C59D] text-2xl ml-3.5'>Dheeraj</h2></b>
       <BsFillBellFill className='ml-auto mr-5 text-[#43C59D] text-2xl'/>
       </div>
       <div>
        <img src={quote} alt='quote' className='mt-10 ml-2' />
       </div>
       <div>
        <img src={task} alt="task" className=' ml-2 mt-10'/>
        
       </div>
      
      </div>
      
       <AiFillPlusCircle className='text-[#43C59D] text-5xl ml-auto mr-5 mt-[10rem]'/>
       
      <BottomNav/>
    </div>
  )
}

export default Home
