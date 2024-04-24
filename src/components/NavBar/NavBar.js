import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import styles from './NavBarStyles';



const NavBar = () => {
    const [value, setValue] = useState('Home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation sx={styles.navBar} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="Home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Pantry"
                value="Pantry"
                icon={<KitchenIcon />}
            />
            <BottomNavigationAction
                label="Community"
                value="Community"
                icon={<PeopleIcon />}
            />
            <BottomNavigationAction 
                label="Profile" 
                value="Profile" 
                icon={<PersonIcon />} 
            />
        </BottomNavigation>
    )
}

export default NavBar;