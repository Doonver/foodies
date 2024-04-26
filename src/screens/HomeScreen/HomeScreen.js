import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Box, Typography, Avatar, TextField, InputAdornment, List } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './HomeScreenStyles.js'
import { currUserAtom, icrAtom, pantryItemsAtom, recipesAtom } from '../../atoms.js';
import NavBar from '../../components/NavBar/NavBar.js';
import RecipeCard from '../../components/RecipeCard/RecipeCard.js'


// TODO: Change the username to the name of the actual user for the Hi statement
const HomeScreen = () => {
    const [user, setUser] = useAtom(currUserAtom);
    const [icr, setIcr] = useAtom(icrAtom);
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    const [recipes, setRecipes] = useAtom(recipesAtom);

    // Define the URL with your API key
    const url = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "9e08f11e28f24e78b115d9f4f4adfe78";

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
                <Box sx={styles.recipeList}>
                    <List sx={styles.list}>
                        {recipes.map((recipe) => {
                            return <RecipeCard key={recipe.id} recipe={recipe}/>
                        })}
                    </List>
                </Box>
                
            </Box>
            <NavBar/>
        </Box>
        
    );
}

export default HomeScreen;