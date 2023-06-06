import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import profilebg from '../../assets/profilebg.png';
import profile from '../../assets/profile.png';
import i from '../../assets/i.png';
import edit from '../../assets/edit.png';
import phone from '../../assets/phone.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import streak from '../../assets/streak.png';
function Profile() {
  return (
    <>
      <div className="flex-grow flex flex-col mb-[1rem]">
        <img src={profilebg} alt="profilebg" className="w-full" />
        <img src={profile} alt="profile" className="mt-[-6rem] mx-auto" />
        <h2 className='text-2xl ml-[7rem]'>Dheeraj Dileep</h2>
      </div>
      <div className='bg-[#F3F3F3] flex flex-row shadow-inner'>
        <img src={i} alt='i'className='ml-[2rem] mt-[0.5rem] mb-[0.5rem] mr-[1rem] pt-[1rem] pb-[1rem]' />
        <div className='flex flex-col'>
        <h2 className='mt-[1rem]'>About</h2>
        <h2 className='font-semibold'>Hi,i'm good</h2>
        </div>
        <img src={edit} alt='edit' className='ml-[11rem] mt-[1.5rem] mb-[1.5rem]'/>
      </div>
      <div className='bg-[#F3F3F3] flex flex-row shadow-inner'>
        <img src={phone} alt='phone'className='ml-[2rem] mt-[0.5rem] mb-[0.5rem] mr-[1rem] pt-[1rem] pb-[1rem]' />
        <div className='flex flex-col'>
        <h2 className='mt-[1rem]'>Phone</h2>
        <h2 className='font-semibold'>0999999999</h2>
        </div>
        <img src={edit} alt='edit' className='ml-[11rem] mt-[1.5rem] mb-[1.5rem]'/>
      </div>
      <div className='bg-[#24806B] rounded-3xl'>
        <h2 className='text-white font-semibold ml-[2rem] pt-[1rem]'>Achievement Wall</h2>
        <img src={sticker2} alt='sticker2' className='ml-[2rem] pt-[1rem]'/>
        <img src={sticker1} alt='sticker1' className='ml-[7rem] pb-[1rem]'/>
      </div>
      <div className='flex flex-row'>
        <h2 className='text-[#24806B] ml-[2rem] mt-[1rem]'>
         Wohoop you have 128 streaks currently, thats more than 30 lakh people around india
        </h2>
        <img src={streak} alt='streak' className=''/>
      </div>
      <BottomNav />
    </>
  )
}

export default Profile;
