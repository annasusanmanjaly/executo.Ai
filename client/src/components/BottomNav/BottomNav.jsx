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
    
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleIconClick = (event, newValue) => {
        setValue(newValue);
      };
    
    return (
        <BottomNavigation className='bg-white-500 h-16' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} 
        value={value} 
        onChange={handleChange}
        >
            <Link to='/page1'>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon style={{color: 'rgba(190, 190, 190, 1)', transform: 'scale(1.5)',  }}
                    onClick={(event) => handleIconClick(event, 'home')}
                    />}
                       
                />
                
            </Link>
            <Link to='/page2'>
                <BottomNavigationAction
                    label="check"
                    value="check"
                    icon={<FactCheckTwoToneIcon style={{color: 'rgba(190, 190, 190, 1)', transform: 'scale(1.5)', }}
                    onClick={(event) => handleIconClick(event, 'check')}
                    />}
                    
                />
            </Link>
            <Link to='page3'>
                <BottomNavigationAction
                    label="Message"
                    value="Message"
                    icon={< MessageIcon style={{color: 'rgba(190, 190, 190, 1)', transform: 'scale(1.5)',  }}
                    onClick={(event) => handleIconClick(event, 'Message')}
                    />}
                    
                />
            </Link>
            <Link to='page4'>
                <BottomNavigationAction
                    label="Account"
                    value="Account"
                    icon={<AccountCircleIcon style={{color: 'rgba(190, 190, 190, 1)', transform: 'scale(1.5)',  }}
                    onClick={(event) => handleIconClick(event, 'Account')}
                    />}
                    
                />
            </Link>
        </BottomNavigation>
    );
}