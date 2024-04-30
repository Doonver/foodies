import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Box, Typography, Avatar, TextField, InputAdornment, List, Card, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './HomeScreenStyles.js'
import { currUserAtom, icrAtom, pantryItemsAtom, recipesAtom } from '../../atoms.js';
import NavBar from '../../components/NavBar/NavBar.js';
import RecipeCard from '../../components/RecipeCard/RecipeCard.js'
import CuisineButtons from '../../components/CuisineButtons/CuisineButtons.js';


// TODO: Change the username to the name of the actual user for the Hi statement
const HomeScreen = () => {
    const [user, setUser] = useAtom(currUserAtom);
    const [icr, setIcr] = useAtom(icrAtom);
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    const [recipes, setRecipes] = useAtom(recipesAtom);

    // Define the URL with your API key
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
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
        
    }


    return (
        <Box sx={styles.scrollable}>
            <Box sx={styles.homeScreen}>
                <Box sx={styles.avatar}>
                    <Avatar sx={{bgcolor: '#A6D0DD'}}>{user[0].toUpperCase()}</Avatar>
                </Box>
                <Box sx={styles.bottomGroup}>
                    <Box sx={styles.heading}>
                        <Typography variant='h5'>
                            <Box component="span" fontWeight='fontWeightMedium'>
                                Hello {user}!
                            </Box>
                        </Typography>
                    </Box>
                    <Card sx={styles.image}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/graph.png"
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
                {/* <Box sx={styles.recipeList}>
                    <List sx={styles.list}>
                        {recipes.map((recipe) => {
                            return <RecipeCard key={recipe.id} recipe={recipe}/>
                        })}
                    </List>
                </Box> */}
                
            </Box>
            <NavBar/>
        </Box>
        
    );
}

export default HomeScreen;