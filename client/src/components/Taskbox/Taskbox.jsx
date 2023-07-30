import React from 'react';
import tasks1 from '../../assets/tasks1.png';

function Taskbox({ goalName, completed, userId }) {
  return (
    <div className='flex flex-row'>
      <img src={tasks1} alt="tasks1" className='ml-2 mt-2' />
      <div className='w-[168px] h-[69px] bg-gray-500 bg-opacity-50 mt-[5rem] ml-[-10.5rem] rounded-3xl text-white'>
        <h6 className='ml-2 mt-2 font-semibold text-base'>{goalName}</h6>
        <p className='text-xs ml-2 font-semibold'>{`Days Completed: ${completed}`}</p>
        {/* You can use other goal variables as needed */}
      </div>
    </div>
  );
}

export default Taskbox;
