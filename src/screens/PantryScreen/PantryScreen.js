import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, CircularProgress } from '@mui/material';
import styles from './PantryScreenStyles';
import NavBar from '../../components/NavBar/NavBar';
import { useAtom } from 'jotai';
import { pantryItemsAtom } from '../../atoms';
import Tesseract from 'tesseract.js';
import { AddCircle, RemoveCircle, Delete } from '@mui/icons-material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';


const PantryScreen = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);

    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [a, b] = useState('');

    const inc = (name) => {
        const newPantryItems = {...pantryItems};
        newPantryItems[name] = (newPantryItems[name] || 0) + 1;
        setPantryItems(newPantryItems);
    };

    const dec = (name) => {
        const newPantryItems = {...pantryItems};
        if (newPantryItems[name] > 1) {
            newPantryItems[name] -= 1;
            setPantryItems(newPantryItems);
        } else {
            delete newPantryItems[name];
            setPantryItems(newPantryItems);
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
                console.log(newPantryItems)
                const mappedObject = {};
                newPantryItems.forEach(item => {
                    mappedObject[item.name] = item.quantity;
                });
                const newObject = {...mappedObject, ...pantryItems};
                console.log(newObject)
                setPantryItems(newObject);
                setText(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
        };
    }

    return (
        <Box sx={styles.pantryPage}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CameraAltIcon/>}
                sx={{backgroundColor:'#FF6969'}}
                >
                Upload Receipt
                <VisuallyHiddenInput type="file" onChange={fileChange}/>
            </Button>


            <Typography variant="h4" sx={{ ...styles.pageTitle, textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>Pantry</Typography>
            <Box sx={styles.itemContainer}>
                {isLoading ? <CircularProgress/>: <></>}
                {Object.entries(pantryItems).map(([name, quantity], index) => (
                    <Box key={index} sx={styles.itemBox}>
                        <Typography sx={styles.itemQuantity}>{quantity}</Typography> 
                        <Typography sx={styles.itemText}>{name}</Typography>

                        <IconButton onClick={() => dec(name)}>
                            <RemoveCircle color="black" />
                        </IconButton>

                        <IconButton onClick={() => inc(name)}>
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
