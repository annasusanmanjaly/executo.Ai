import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Taskbox from '../../components/Taskbox/Taskbox';

function Goals() {
  // const [phno,setPhno] = useState('')

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  //   const phn = userData.phoneNumber
  //   console.log("phn",phn)
  //   if (userData) {
  //     setPhno(phn);
  //     console.log("phoneNumber",phno)
  //   }
  // }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const phn = userData.phoneNumber
    console.log(phn)
    if (phn) {
      // Make a GET request to the backend API with the phone number as a query parameter
      axios
        .get('http://localhost:3000/goals', {
          params: {
            phoneNumber: phn
          }
        })
        .then((response) => {
          const goalsData = response.data;
          console.log(goalsData);
          // Handle the goals data from the response if needed
        })
        .catch((error) => {
          console.error(error);
          // Handle errors if needed
        });
    }
  }, []);

  return (
    <div>
      <Taskbox />
    </div>
  );
}

export default Goals;
