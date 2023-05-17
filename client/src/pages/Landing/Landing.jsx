<<<<<<< HEAD

=======
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

>>>>>>> 0e7516e8c8544e26e25415daa2f4b7da00c809a5
function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="logo" className="max-w-full h-auto" />
    </div>
  );
}

export default Landing;
