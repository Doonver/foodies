import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './PantryScreenStyles'; // Import PantryScreenStyles
import NavBar from '../../components/NavBar/NavBar';
import { useAtom } from 'jotai';
import { pantryItemsAtom } from '../../atoms';

const PantryScreen = () => {
    // State variable to store pantry items
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    // Function to handle item removal
    const handleRemoveItem = (index) => {
        // Create a new array without the item at the specified index
        const updatedPantryItems = pantryItems.filter((_, i) => i !== index);
        // Update the state with the new array of pantry items
        setPantryItems(updatedPantryItems);
    };

    return (
        <Box sx={styles.pantryPage}>
            <Typography variant="h4" sx={{ ...styles.pageTitle, textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>Pantry</Typography>
            <Box sx={styles.itemContainer}>
                {/* Map through the pantry items */}
                {pantryItems.map((item, index) => (
                    <Box key={index} sx={styles.itemBox}>
                        <Typography sx={styles.itemText}>{item}</Typography>
                        {/* Add onClick event to handle item removal */}
                        <span style={styles.removeButton} onClick={() => handleRemoveItem(index)}>×</span>
                    </Box>
                ))}
            </Box>
            <NavBar/>
        </Box>
    );
}

export default PantryScreen;
