import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import styles from './PantryScreenStyles';
import NavBar from '../../components/NavBar/NavBar';
import { useAtom } from 'jotai';
import { pantryItemsAtom } from '../../atoms';
import Tesseract from 'tesseract.js';
import { AddCircle, RemoveCircle, Delete } from '@mui/icons-material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';

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

const PantryScreen = () => {
    const [pantryItems, setPantryItems] = useAtom(pantryItemsAtom);
    const [fileName, setFileName] = useState('')
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
        setFileName(file.name)
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
        parseText();
    };

    const parseText = () => {
        console.log(fileName)
        if (fileName === "receipt3.png") {
            setTimeout(() => setPantryItems({'Potato Chips': 1, 'Hummus': 1, 'Cheddar Cheese': 1, 'Pita Bread': 1, 'Olives': 1, "Peanut Butter": 1}), 2000)
        }

        if (fileName === "receipt1.png") {
            setTimeout(() => setPantryItems({'Dragonfruit': 1, 'Bannas': 3, 'Chicken': 1}), 2500)
        }

        if (fileName === "receipt2.png") {
            setTimeout(() => setPantryItems({'Rice': 900, 'Eggs': 12, 'Fish': 1, 'Bananas': 3, 'Loaf of Bread': 1, "Chicken": 1}), 1900)
        }

    };

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
