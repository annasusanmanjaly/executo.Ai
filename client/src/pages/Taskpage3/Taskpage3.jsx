import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import medal from '../../assets/medal.png';
import Topnav from '../../components/Topnav/Topnav';

function Taskpage3() {
    return (
         <div className='bg-[#F3F3F3] h-screen w-screen flex  pr-3 flex-col'>
           
           
            <Topnav/>
           <div className='mr-5' >
            <b><h2 className='text-[#1F695D] text-3xl ml-[90px] mt-[60px]'>Congratulations</h2></b>
            <img src={medal} alt='medal' className='mt-[60px] ml-[130px]' />
           <b><h2 className='text-[#656565] text-1xl ml-[110px] mt-[10px]'>You earned a new badge</h2></b>
           
           
           <b><h2 className='text-[#1F695D] text-1xl ml-[55px] mt-[130px]'>You have completed today's task chief</h2></b>
           <h2 className='text-[#1F695D] text-1xl ml-[70px] mt-[3px]'>Checkout your friends progress <b>here</b></h2>
            </div>
            
           <BottomNav/>
           </div>
    )         

}

export default Taskpage3;