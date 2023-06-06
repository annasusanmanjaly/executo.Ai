import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  const [value, setValue] = React.useState('home');

  const handleIconClick = (newValue) => {
    setValue(newValue);
  };

  const renderIcon = (icon, newValue) => {
    const isActive = value === newValue;
    const iconStyle = {
      color: isActive ? '#43C59D' : 'rgba(190, 190, 190, 1)',
      transform: 'scale(1.5)',
    };

    return React.cloneElement(icon, {
      style: iconStyle,
      onClick: () => handleIconClick(newValue),
    });
  };
  return (
    <BottomNavigation
      className="bg-white-500 h-16"
      sx={{
        position: 'fixed',
        bottom: 3,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
    >
      <Link to="/home">
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={renderIcon(<HomeIcon />, 'home')}
        />
      </Link>
      <Link to="">
        <BottomNavigationAction
          label="check"
          value="check"
          icon={renderIcon(<FactCheckTwoToneIcon />, 'check')}
        />
      </Link>
      <Link to="/chat">
        <BottomNavigationAction
          label="Message"
          value="Message"
          icon={renderIcon(<MessageIcon />, 'Message')}
        />
      </Link>
      <Link to="">
        <BottomNavigationAction
          label="Account"
          value="Account"
          icon={renderIcon(<AccountCircleIcon />, 'Account')}
        />
      </Link>
    </BottomNavigation>
  );
}
