import React, { useState } from 'react';
import bg from '../../assets/bg.png'
import logo from '../../assets/logo.png'
import Otpbox from '../../components/otp/Otpbox'
import IoArrowBackCircleSharp from 'react-icons/io'
function Otp() {
  const [otp, setOtp] = useState("");
  const isOtpFilled = otp.length === 4;

  const handleOtpChange = (e) => {
    const newOtp = e.target.value;
    setOtp(newOtp);
  };
    return (
      <div>
        
        <div className='flex justify-center items-center flex-col'>
            <div className="relative">
              <img src={bg} alt="background" />
              <img src={logo} alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            {/* <IoArrowBackCircleSharp/> */}
          <div className='relative h-screen/2 w-screen bg-white flex flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl text-teal-500 m-5'>Enter OTP</h1>
            <p>We have send an OTP to your mobile number</p>
            <div>
              <Otpbox/>
            </div>
            
            <button
                className={`h-[52px] w-[335px] rounded-lg font-bold font-inter ${
                  isOtpFilled ? 'bg-teal-500 opacity-50 cursor-not-allowed text-white'
                  : 'bg-teal-500  text-white'
                }`}
                disabled={!isOtpFilled}
                >
                Sign In
              </button>

              <div className="inline mt-5">
                <p className="text-gray-600 inline">Did'nt recieve the otp?</p>
                <p className="text-green-600 inline">Resend</p>
              </div>

    
  
          </div>
        </div>
      
      </div> 
     )
    }     

export default Otp
