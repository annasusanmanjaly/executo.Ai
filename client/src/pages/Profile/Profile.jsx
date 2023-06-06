import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import profilebg from '../../assets/profilebg.png';
import profile from '../../assets/profile.png';

function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col">
        <img src={profilebg} alt="profilebg" className="w-full" />
        <img src={profile} alt="profile" className="mt-[-6rem] mx-auto" />
        <h2 className='text-2xl ml-[7rem]'>Dheeraj Dileep</h2>
      </div>
      <div>
        
      </div>
      <BottomNav />
    </div>
  )
}

export default Profile;
