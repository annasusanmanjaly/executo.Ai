import React,{useState,useEffect} from 'react'
import {BsFillBellFill} from 'react-icons/bs'
import getUserProfile from '../../data/user'
function Topnav() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const phn = userData.phoneNumber
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const phn = userData.phoneNumber;

    // Use async/await to handle the promise
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(phn);
        setUser(userProfile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);
  console.log("topnav",user)
  return (
    <div>
      <h3 className='ml-4 mt-7'>Hi,</h3>
        <div className='flex flex-row '>
        <h2 className='text-[#43C59D] text-2xl ml-3.5 font-semibold'>{user?user.name:'user'}</h2>
       <BsFillBellFill className='ml-auto mr-5 text-[#43C59D] text-2xl'/>
       </div> 
    </div>
  )
}

export default Topnav
