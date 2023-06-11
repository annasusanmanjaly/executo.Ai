
import React from 'react'
import pic from '../../assets/pic.png';
import Topnav from '../../components/Topnav/Topnav';
import BottomNav from '../../components/BottomNav/BottomNav';
import ProgressBar from "@ramonak/react-progress-bar";
import './Taskpage1.css'


function Taskpage1() {
    return (
        <div className='bg-[#F3F3F3]'>
            <Topnav />
            <div>
                <div className='flex flex-row mt-[1.5rem]'>
                    <h3 className='text-[#1F695D] text-xl font-semibold ml-3 mt-1 '>Progress</h3>
                    <h3 className='text-[#1F695D] text-xl ml-auto mr-5 font-semibold'>Day 25</h3>
                </div>
                <img src={pic} alt='pic' className='w-[150px] h-[150px] ml-[120px] mt-[1.5rem]' />
                <ProgressBar
                    completed={12}
                    className="mt-4 w-[335px] h-[52px] ml-5"
                    height="22px"

                    borderRadius="10px"
                    baseBgColor="#D9D9D9"
                    bgColor="#43C59D" />
                <h5 className='text-[#237E62] text-sm  ml-[6rem] mt-[6px] font-bold'>Skipped a day ? Reschedule</h5>

            </div>
            <div className='mt-[70px]'>
                <h3 className='text-[#1F695D] font-bold text-lg ml-[35px] mt-[2.5rem]'> Day25 :Asynchronous JavaScript</h3>
                <br/>
                <ul className="list-disc pl-8 space-y-2 ml-[20px]">
                    <li>

                        <label htmlFor="item1" className='text-[#5B5858]'>Understand asynchronous JS</label>
                        
                        <input type="checkbox" id="item1" className=" ml-[4rem] w-[24px] h-[24px]   checkbox-green " />
                        
                    </li>
                    
                    <li>

                        <label htmlFor="item2" className='text-[#5B5858]'>Event loop</label>
                        <input type="checkbox" id="item2"className=" ml-[12rem]  w-[24px] h-[24px] checkbox-green " />
                        
                    </li>
                    
                    <li>

                        <label htmlFor="item3" className='text-[#5B5858]'>Callbacks,promises,async/await</label>
                        <input type="checkbox" id="item3"className='ml-[3rem]  w-[24px] h-[24px] checkbox-green  ' />
                        
                    </li>
                    <li>

                        <label htmlFor="item4" className='text-[#5B5858]'>Fetching Data,handling input</label>
                        <input type="checkbox" id="item4"className=' ml-[4rem]  w-[24px] h-[24px] checkbox-green  '/ >
                        
                    </li>

                </ul>
                <button
            className='absolute left-[7.44%] right-[6.67%] top-[78.2%] bottom-[15.64%] text-white bg-[#43C59D] rounded-2xl font-medium text-lg leading-6 w-[335px] h-[52px] mt-[27px]'
            
          >
            Submit
          </button> 



            </div>
            <BottomNav />
        </div>
    )
}
export default Taskpage1;