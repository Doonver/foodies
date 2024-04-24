import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Box, Typography, Avatar, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './HomeScreenStyles.js'
import { currUserAtom, icrAtom } from '../../atoms.js';
import NavBar from '../../components/NavBar/NavBar.js';


// TODO: Change the username to the name of the actual user for the Hi statement
const HomeScreen = () => {
    const [user, setUser] = useAtom(currUserAtom);
    const [icr, setIcr] = useAtom(icrAtom);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (input) => {
        setSearchQuery(input.target.value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            console.log('Search triggered with value:', searchQuery);
        }
    }


    return (
        <Box sx={styles.scrollable}>
            <Box sx={styles.homeScreen}>
                <Box sx={styles.heading}>
                    <Typography variant='h5'>
                        Hi {user}!
                    </Typography>
                    <Avatar>{user[0].toUpperCase()}</Avatar>
                </Box>
                <TextField
                    sx={styles.searchBar}
                    variant="outlined"
                    label="Explore Recipes"
                    value={searchQuery}
                    onKeyDown={handleSearch}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment onClick={handleSearch}position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                    onChange={handleSearchChange}
                />
            </Box>
            <NavBar/>
        </Box>
        
    );
}

export default HomeScreen;