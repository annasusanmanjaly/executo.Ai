import React, { useState, useContext, useEffect, useRef } from 'react';
import photo from '../../assets/photo.png';
import './Userdetails.css';
import axios from 'axios';
import { AuthContext } from '../../context/Authcontext';

function Userdetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setItems(userData);
    }
  }, []);

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Create an object with the email and name values
    const phoneNumber = items.phoneNumber;
    const userData = { name, email, phoneNumber };

    // Make a POST request to the backend API
    axios
      .post('http://localhost:3000/saveuser', userData)
      .then((response) => {
        console.log(response.data);
        // Handle the response from the backend if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle errors if needed
      });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Perform any necessary actions with the selected photo
        console.log('Selected photo:', file);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      setPreviewImage(null);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='useless'>
        <label htmlFor='file-input' className='file-label'>
          {previewImage ? (
            <img src={previewImage} alt='photo' className='rounded-full h-40 w-40 object-cover mx-auto mt-[7rem] ' onClick={handlePhotoClick} />
          ) : (
            <img src={photo} alt='photo' className='bio' onClick={handlePhotoClick} />
          )}
          <span className='browse-btn'></span>
        </label>
        <input
          type='file'
          id='file-input'
          accept='image/*'
          ref={fileInputRef}
          onChange={handlePhotoChange}
          style={{ display: 'none' }}
        />
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
        <button className='save' onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Userdetails
