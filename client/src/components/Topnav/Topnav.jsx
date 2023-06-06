import React from 'react'
import {BsFillBellFill} from 'react-icons/bs'
function Topnav() {
  return (
    <div>
      <h3 className='ml-4 mt-7'>Hi,</h3>
        <div className='flex flex-row '>
        <h2 className='text-[#43C59D] text-2xl ml-3.5 font-semibold'>Dheeraj</h2>
       <BsFillBellFill className='ml-auto mr-5 text-[#43C59D] text-2xl'/>
       </div> 
    </div>
  )
}

export default Topnav
