import React from 'react'
import BottomNav from '../../components/BottomNav/BottomNav';
import quote from '../../assets/quote.png';
import task from '../../assets/task.png';
import {AiFillPlusCircle } from "react-icons/ai";
import Topnav from '../../components/Topnav/Topnav';

function Home() {
  return (
    <div>
      <div>
        <Topnav/>
       <div className='mr-5'>
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
