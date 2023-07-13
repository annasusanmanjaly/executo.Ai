import React, { useState,useContext } from 'react';
import photo from '../../assets/photo.png';
import './Userdetails.css';
import axios from 'axios';
import { AuthContext } from '../../context/Authcontext';


function Userdetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useContext(AuthContext);
  console.log("user",user)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Create an object with the email and name values
    const phoneNumber = user.phoneNumber
    const userData = { name, email ,phoneNumber };

    // Make a POST request to the backend API
    axios.post('http://localhost:3000/saveuser', userData)
      .then((response) => {
        console.log(response.data);
        // Handle the response from the backend if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if needed
      });
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='useless'>
        <img src={photo} alt='photo' className='bio' />
      </div>
      <div className='division'>
        <h3 className='upload'>Upload your profile picture</h3>
        <input
          type='text'
          className='name'
          onChange={handleNameChange}
          placeholder='Enter your name'
        />
        <input
          type='text'
          className='mail'
          onChange={handleEmailChange}
          placeholder='Enter your mail id'
        />
        <button className={'save'} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Userdetails;
