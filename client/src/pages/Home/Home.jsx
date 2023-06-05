import React from 'react'
import BottomNav from '../../components/BottomNav/BottomNav';
import quote from '../../assets/quote.png';

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
       <Taskbox/>
      
      </div>
      
       <AiFillPlusCircle className='text-[#43C59D] text-5xl ml-auto mr-5 mt-[10rem]'/>
       
      <BottomNav/>
    </div>
  )
}

export default Home
