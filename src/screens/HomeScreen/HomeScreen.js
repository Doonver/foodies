import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Box, Typography, Avatar, TextField, InputAdornment, List, Card, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './HomeScreenStyles.js'
import { currUserAtom, icrAtom, pantryItemsAtom, recipesAtom, currPageAtom, loadingAtom } from '../../atoms.js';
import NavBar from '../../components/NavBar/NavBar.js';
import CuisineButtons from '../../components/CuisineButtons/CuisineButtons.js';


// TODO: Change the username to the name of the actual user for the Hi statement
const HomeScreen = () => {
    const [user, setUser] = useAtom(currUserAtom);
    const [icr, setIcr] = useAtom(icrAtom);
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    const [recipes, setRecipes] = useAtom(recipesAtom);
    const [page, setPage] = useAtom(currPageAtom)
    const [loading, setLoading] = useAtom(loadingAtom)

    const url = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "b78f11225f014087a32f54070b440e30";

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (input) => {
        setSearchQuery(input.target.value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            console.log('Search triggered with value:', searchQuery);
            const fullUrl = `${url}?query=${searchQuery}&apiKey=${apiKey}&addRecipeNutrition=true`;
            console.log(fullUrl)
            setRecipes([])
            setLoading(true);
            fetch(fullUrl)
                .then(response => {
                    if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data['results'])
                    setRecipes(data['results'])
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
            setPage('Search')
            
        }
        
    }


    return (
        <Box sx={styles.scrollable}>
            <Box sx={styles.homeScreen}>
                <Box sx={styles.avatar}>
                    <Avatar sx={{bgcolor: '#A6D0DD'}}>{'S'}</Avatar>
                </Box>
                <Box sx={styles.bottomGroup}>
                    <Box sx={styles.heading}>
                        <Typography sx={styles.sugarLevel} variant='h4'>
                            <Box component="span" fontWeight='fontWeightBold'>
                                Hello Siddarth!
                            </Box>
                        </Typography>
                    </Box>
                    <Typography sx={styles.sugarLevel}variant='h6'>
                            <Box component="span" fontWeight='fontWeightMedium'>
                                Your Sugar Level:
                            </Box>
                        </Typography>
                    <Card sx={styles.image}>
                        <CardMedia
                            component="img"
                            height="fit-content"
                            image="/graph_new.png"
                        />
                    </Card>
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
                    <CuisineButtons/>
                </Box>
            </Box>
            <NavBar/>
        </Box>
        
    );
}

export default HomeScreen;