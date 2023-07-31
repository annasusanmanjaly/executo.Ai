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
import { IoIosInformationCircle } from "react-icons/io";
import {AiTwotoneMail} from "react-icons/ai";


function Profile() {
  const [aboutText, setAboutText] = useState("add bio");
  const [isEditing, setIsEditing] = useState(false);
  const [newAboutText, setNewAboutText] = useState('cusat');
  const [addressText, setAddressText] = useState('');
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
    // Check if newAddressText is empty, if so, use the email address
    setAddressText(newAddressText || userDetails?.email || addressText);
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
    const phoneNumber = userData.phoneNumber;

    // Fetch the user details when the component mounts
    fetchUserDetails(phoneNumber);
  }, []);

  const fetchUserDetails = (phoneNumber) => {
    axios.get(`http://localhost:3000/readuser`, {
      params: { phoneNumber },
    })
    .then((response) => {
      const data = response.data;
      setUserDetails(data);
      setAboutText(data.about || aboutText);
      setAddressText(data.email || addressText); // Changed to use email here
    })
    .catch((error) => {
      console.error('Error fetching user details:', error);
    });
  };

  return (
    <>
      <div className="flex-grow flex flex-col mb-[2rem] ">
        <img src={profilebg} alt="profilebg" className="w-full" />
        <img src={profile2} alt="profile2" className="mt-[-4rem] mx-auto h-[8rem] rounded-full" />
        <h2 className='text-2xl ml-[9rem]'>
          {userDetails ? userDetails.name : 'Loading...'}
        </h2>
      </div>
      {/* <div className='text-xl text-[#24806B] '>Phone Number:</div>
      <div className='ml-[9rem] mt-[-1.5rem] pb-[1rem]'>
           {userDetails ? userDetails.phone_number : 'Loading...'}
        </div> */}
      
      <div className='bg-[#F3F3F3] flex flex-row shadow-inner mb-[0.2rem]'>
        <IoIosInformationCircle className='w-10 h-10 mt-6 ml-2'/>
        <div className='flex flex-col ml-10'>
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
        <AiTwotoneMail
          className='w-10 h-10 mt-6 ml-2'
        />
        <div className='flex flex-col ml-10'>
          <h2 className='mt-[1rem]'>Email</h2>
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
      <div className='flex flex-row'>
        <h2 className='text-[#24806B] ml-[2rem] mt-[1rem]'>
          Wohoo! You have 128 streaks currently, that's more than

        </h2>
        <img src={streak} alt='streak' className=''/>
      </div>
      <BottomNav />
    </>
  )
}

export default Profile;
