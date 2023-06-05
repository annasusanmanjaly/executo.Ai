import React from 'react'
import tasks1 from '../../assets/tasks1.png';
import tasks2 from '../../assets/tasks2.png';
function Taskbox() {
    return (
        <div >
        <div className='flex flex-row'>
       <b><h2 className='text-[#1F695D] text-2xl ml-4 mt-6'>Today your task</h2></b>
       <p className=' text-[blue] ml-[7rem] mt-[1.5rem]' >view All </p>
       </div>
       <div className='flex flex-row '>
      <img src={tasks1} alt="tasks1" className=' ml-2 mt-2 '/>
      <div className='w-[168px] h-[69px] bg-gray-500 bg-opacity-50 mt-[5rem] ml-[-10.5rem] rounded-3xl text-white '>
        <h6 className='ml-2 mt-2 font-semibold text-base'>Javascript</h6>
        <p className='text-xs ml-2 font-semibold'>Day 25/30</p>
      </div>
        <img src={tasks2} alt="tasks2" className='ml-5 mt-2 '/>
        </div>
       </div>
      
      
    )
  }
  
  export default Taskbox