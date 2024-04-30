import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './PantryScreenStyles'; // Import PantryScreenStyles
import NavBar from '../../components/NavBar/NavBar';
import { useAtom } from 'jotai';
import { pantryItemsAtom } from '../../atoms';
import Tesseract from 'tesseract.js';

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

    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const parseText = () => {
        if (image) {
        setIsLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => console.log(m),
        })
        .then(async ({ data: { text } }) => {

            const response = await fetch(
                'https://noggin.rea.gent/musical-booby-4876',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer rg_v1_rv33ypj2lml3hqyow996vats5rot91v61q89_ngk',
                  },
                  body: JSON.stringify({
                    "parsed-text": text,
                  }),
                }
              ).then(response => response.text());
                setText(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
        }
    };

    return (
        <Box sx={styles.pantryPage}>
            <input type="file" accept="image/*" onChange={fileChange} />
            <button onClick={parseText} disabled={isLoading}>
                {isLoading ? 'Extracting...' : 'Extract Text'}
            </button>
            {text && <p>Extracted Text: {text}</p>}

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
