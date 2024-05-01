import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import styles from './PantryScreenStyles';
import NavBar from '../../components/NavBar/NavBar';
import { useAtom } from 'jotai';
import { pantryItemsAtom } from '../../atoms';
import Tesseract from 'tesseract.js';
import { AddCircle, RemoveCircle, Delete } from '@mui/icons-material';

const PantryScreen = () => {
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    const [itemQuantities, setItemQuantities] = useState(
        pantryItems.map((item) => ({ name: item, quantity: 1 }))
    );
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inc = (index) => {
        const newQuantities = [...itemQuantities];
        newQuantities[index].quantity += 1;
        setItemQuantities(newQuantities);
    };

    const dec = (index) => {
        const newQuantities = [...itemQuantities];
        if (newQuantities[index].quantity > 1) {
            newQuantities[index].quantity -= 1;
            setItemQuantities(newQuantities);
        } else {
            const updatedPantryItems = pantryItems.filter((_, i) => i !== index);
            setPantryItems(updatedPantryItems);
            setItemQuantities(newQuantities.filter((_, i) => i !== index));
        }
    };

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
                // import fetch from 'node-fetch'; // for node.js

                const response = await fetch(
                    'https://noggin.rea.gent/musical-booby-4876',
                    {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer rg_v1_rv33ypj2lml3hqyow996vats5rot91v61q89_ngk',
                    },
                    body: JSON.stringify({
                        // fill variables here.
                        "parsed-text": text,
                    }),
                    }
                ).then(response => response.text());

                const doubleArray = JSON.parse(response);

                const newPantryItems = doubleArray.map((item) => ({ name: item[0], quantity: item[1] }));
                setPantryItems([...pantryItems, ...newPantryItems]);
                setItemQuantities([...itemQuantities, ...newPantryItems]);

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
            {/* {text && <p>Extracted Text: {text}</p>} use this to test the output*/}

            <Typography variant="h4" sx={{ ...styles.pageTitle, textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>Pantry</Typography>
            <Box sx={styles.itemContainer}>
                {itemQuantities.map((item, index) => (
                    <Box key={index} sx={styles.itemBox}>
                        <Typography sx={styles.itemQuantity}>{item.quantity}</Typography> 
                        <Typography sx={styles.itemText}>{item.name}</Typography>

                        <IconButton onClick={() => dec(index)}>
                            <RemoveCircle color="black" />
                        </IconButton>

                        <IconButton onClick={() => inc(index)}>
                            <AddCircle color="black" />
                        </IconButton>
                    </Box>
                ))}
            </Box>
            <NavBar />
        </Box>
    );
};

export default PantryScreen;
