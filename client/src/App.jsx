import { Routes, Route } from 'react-router-dom';
import Landing from '../src/pages/Landing/Landing';
import Login from '../src/pages/Login/Login';
import Userdetails from '../src/pages/Userdetails/Userdatails';
import Home from './pages/Home/Home';
import Addtask from './pages/Addtask/Addtask';
import Taskpage1 from './pages/Taskpage1/Taskpage1';
import Otp from './pages/Otp/Otp';
import Taskpage3 from './pages/Taskpage3/Taskpage3';
import Profile from './pages/Profile/Profile';
import Chatroom from './pages/Chat/Chatroom';
import Chats from './pages/Chat/Chats';
import Goals from './pages/Goals/Goals';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/userdetails' element={<Userdetails />} />
      <Route path='/home' element={<Home />} />
      <Route path='/addtask' element={<Addtask />} />
      <Route path='/taskpage1/:goalId' element={<Taskpage1 />} />
      <Route path='/Otp' element={<Otp />} />
      <Route path='/taskpage3' element={<Taskpage3 />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/chatroom' element={<Chatroom/>}/>
      <Route path='/chatroom/:roomId' element={<Chats/>} />
      <Route path='/goals' element={<Goals/>}/>
      {/* <Route path='/chats' element={<Chats/>}/> */}
    </Routes>
    
  );
}


export default App;