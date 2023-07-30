import React, { useState, useEffect } from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import profilebg from '../../assets/profilebg.png';
import profile from '../../assets/profile.png';
import i from '../../assets/i.png';
import edit from '../../assets/edit.png';
import phone from '../../assets/phone.png';
import sticker1 from '../../assets/sticker1.png';
import sticker2 from '../../assets/sticker2.png';
import streak from '../../assets/streak.png';
import axios from 'axios';
import profile2 from '../../assets/profile2.jpg';


function Profile() {
  const [aboutText, setAboutText] = useState("add bio");
  const [isEditing, setIsEditing] = useState(false);
  const [newAboutText, setNewAboutText] = useState('');
  const [addressText, setAddressText] = useState('cusat');
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [newAddressText, setNewAddressText] = useState('');
  const [userDetails, setUserDetails] = useState(null);


  const handleEditAboutClick = () => {
    setIsEditing(true);
    setNewAboutText(aboutText);
  };

  const handleSaveAboutClick = () => {
    setIsEditing(false);
    setAboutText(newAboutText);
  };

  const handleCancelAboutClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewAboutText(e.target.value);
  };

  const handleEditAddressClick = () => {
    setIsAddressEditing(true);
    setNewAddressText(addressText);
  };

  const handleSaveAddressClick = () => {
    setIsAddressEditing(false);
    setAddressText(newAddressText);
  };

  const handleCancelAddressClick = () => {
    setIsAddressEditing(false);
  };

  const handleAddressInputChange = (e) => {
    setNewAddressText(e.target.value);
  };

  useEffect(() => {
    // Assuming you have the phone number stored in local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    const phoneNumber = userData.phoneNumber

    // Fetch the user details when the component mounts
    fetchUserDetails(phoneNumber);
  }, []);

  const fetchUserDetails = (phoneNumber) => {
    axios.get(`http://localhost:3000/readuser`, {
      params: { phoneNumber },
    })
    .then((response) => {
      const data = response.data;
      console.log(data)
      setUserDetails(data);
      setAboutText(data.about || aboutText);
      setAddressText(data.address || addressText);
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
    });
  };

  
  
  // const bufferData = { type: 'Buffer', data: [userDetails ? userDetails.dp : 'Loading...'] };
  // console.log("userDetails",userDetails.name)
  return (
    <>
      <div className="flex-grow flex flex-col mb-[2rem] ">
        <img src={profilebg} alt="profilebg" className="w-full" />
        <img src={profile2} alt="profile2" className="mt-[-4rem] mx-auto h-[8rem] rounded-full" />

        <h2 className='text-2xl ml-[9rem]'>
          {userDetails ? userDetails.name : 'Loading...'}
        </h2>
      </div>
      <div className='text-xl text-[#24806B] '>Phone Number:</div>
      <div className='ml-[9rem] mt-[-1.5rem] pb-[1rem]'>
           {userDetails ? userDetails.phone_number : 'Loading...'}
        </div>
      <div className='text-xl text-[#24806B]'>Email:</div>
      <div className='ml-[3.5rem] mt-[-1.5rem] pb-[2rem]'>
          {userDetails ? userDetails.email : 'Loading...'}
        </div>

      <div className='bg-[#F3F3F3] flex flex-row shadow-inner mb-[0.2rem]'>
        <img src={i} alt='i' className='ml-[2rem] mt-[0.5rem] mb-[0.5rem] mr-[1rem] pt-[1rem] pb-[1rem]' />
        <div className='flex flex-col'>
          <h2 className='mt-[1rem]'>About</h2>
          {isEditing ? (
            <>
              <input
                type='text'
                value={newAboutText}
                onChange={handleInputChange}
                className='font-semibold'
              />
              <div>
                <button onClick={handleSaveAboutClick}>Save</button>
                <button onClick={handleCancelAboutClick}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h2 className='font-semibold'>{aboutText}</h2>
              <img
                src={edit}
                alt='edit'
                className='ml-[16rem] mt-[-1.5rem] mb-[1.5rem]'
                onClick={handleEditAboutClick}
              />
            </>
          )}
        </div>
      </div>
      <div className='bg-[#F3F3F3] flex flex-row shadow-inner mb-[1.5rem]'>
        <img
          src={phone}
          alt='phone'
          className='ml-[2rem] mt-[0.5rem] mb-[0.5rem] mr-[1rem] pt-[1rem] pb-[1.3rem]'
        />
        <div className='flex flex-col'>
          <h2 className='mt-[1rem]'>Address</h2>
          {isAddressEditing ? (
            <>
              <input
                type='text'
                value={newAddressText}
                onChange={handleAddressInputChange}
                className='font-semibold'
              />
              <div>
                <button onClick={handleSaveAddressClick}>Save</button>
                <button onClick={handleCancelAddressClick}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h2 className='font-semibold'>{addressText}</h2>
              <img
                src={edit}
                alt='edit'
                className='ml-[16rem] mt-[-1.5rem] mb-[1.5rem]'
                onClick={handleEditAddressClick}
              />
            </>
          )}
        </div>
      </div>
      <div className='bg-[#24806B] rounded-3xl mb-[2rem]'>
        <h2 className='text-white font-semibold ml-[2rem] pt-[1rem]'>Achievement Wall</h2>
        <img src={sticker2} alt='sticker2' className='ml-[2rem] pt-[1rem]'/>
        <img src={sticker1} alt='sticker1' className='ml-[7rem] pb-[1rem]'/>
      </div>
      <div className='flex flex-row'>
        <h2 className='text-[#24806B] ml-[2rem] mt-[1rem]'>
          Wohoo! You have 128 streaks currently, that's more than 30 lakh people around India
        </h2>
        <img src={streak} alt='streak' className=''/>
      </div>
      <BottomNav />
    </>
  )
}

export default Profile;
