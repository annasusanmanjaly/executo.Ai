import { Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing';
import Login from '../src/pages/Login/Login';
import Userdetails from '../src/pages/Userdetails/Userdatails';
import Home from './pages/Home/Home';
import Addtask from './pages/Addtask/Addtask';
<<<<<<< Updated upstream
import Chat from "./pages/Chat/Chat";
=======
import Otp from './pages/Otp/Otp';
import Taskpage3 from './pages/Taskpage3/Taskpage3';


>>>>>>> Stashed changes

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userdetails' element={<Userdetails />} />
      <Route path='/home' element={<Home />} />
      <Route path='/addtask' element={<Addtask />} />
<<<<<<< Updated upstream
      <Route path='/chat' element={<Chat />} />
=======
      <Route path='/Otp' element={<Otp />} />
      <Route path='/taskpage3' element={<Taskpage3 />} />

>>>>>>> Stashed changes
    </Routes>
    
  );
}


export default App;