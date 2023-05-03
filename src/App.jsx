import { Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing';
import Login from '../src/pages/Login';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLogin) {
      navigate('/login');
    }
  }, [showLogin, navigate]);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      {showLogin && <Route path='/login' element={<Login />} />}
    </Routes>
  );
}

export default App;
