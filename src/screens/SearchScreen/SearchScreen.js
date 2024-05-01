import React, { useState } from 'react';
import { Box, List, IconButton } from '@mui/material';
import styles from './SearchScreenStyles.js'; 
import CircularProgress from '@mui/material/CircularProgress';

import { useAtom } from 'jotai';
import { recipesAtom, currPageAtom, loadingAtom } from '../../atoms';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SearchScreen = () => {
    const [recipes, setRecipes] = useAtom(recipesAtom);
    const [page, setPage] = useAtom(currPageAtom);
     const [loading, setLoading] = useAtom(loadingAtom);
    
    return (
        <Box sx={styles.searchScreen}>
            <Box sx={styles.backButton}>
                <IconButton aria-label="back" onClick={() => {setPage('Home')}}>
                    <ArrowBackIcon/>
                </IconButton>
            </Box>
            <Box sx={styles.recipeList}>
                    <List sx={styles.list}>
                        {loading ? <CircularProgress/>: <></>}
                        {recipes.map((recipe) => {
                            return <RecipeCard key={recipe.id} recipe={recipe}/>
                        })}
                    </List>
                </Box>
            <NavBar/>
        </Box>
    );
}

export default SearchScreen;
