import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import Topnav from '../../components/Topnav/Topnav';

function Addtask() {
  return (
    <div className='bg-[#F3F3F3] h-screen w-screen flex items-center pr-3 flex-col'>
      <Topnav/>
      <div className="pt-8 pl-4">
        <h2 className="font-bold text-gray-600">Add your goal</h2>
        <input
          className="h-[6rem] w-[22rem] outline-none mt-4 rounded-md bg-white px-4 pb-10 shadow-inner"
          type="text"
          placeholder="Type your goal here......"
          style={{ lineHeight: '2rem' }}
        />
      </div>
      <div className="pt-8 pl-4">
        <h2 className="font-bold text-gray-600">How many days until deadline?</h2>
        <input
          className="h-[3rem] w-[22rem] outline-none mt-4 rounded-md bg-white px-4  shadow-inner"
          type="text"
        />
      </div>
      <button className='h-[3rem] w-[22rem] bg-[#43C59D] rounded-md text-white text-lg mt-[10rem]'>Set Goal</button>
      <BottomNav/>
    </div>
  );
}

export default Addtask;
