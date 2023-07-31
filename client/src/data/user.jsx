// frontend/userProfile.jsx

import axios from 'axios';

// Function to fetch user details from the backend
export default async function getUserProfile(phoneNumber) {
  try {
    const response = await axios.get('http://localhost:3000/readuser', {
      params: {
        phoneNumber: phoneNumber
      }
    });
    const userData = response.data;
    return userData;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
}


