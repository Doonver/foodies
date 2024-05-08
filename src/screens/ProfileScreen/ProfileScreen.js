import React, { useState } from 'react';
import { Box, Typography, Chip, Button, Popover, List, ListItem, ListItemButton, TextField, Grid } from '@mui/material';
import styles from './ProfileScreenStyles.js';
import NavBar from '../../components/NavBar/NavBar.js';

const ProfileScreen = () => {
    // Define initial dietary restrictions
    const height = "5' 6\""
    const [dietaryRestrictions, setDietaryRestrictions] = useState(['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free']);
    // Define initial allergens
    const [allergens, setAllergens] = useState(['Nut', 'Seafood', 'Gluten']);
    const [anchorElAllergen, setAnchorElAllergen] = useState(null);
    const [anchorElDietary, setAnchorElDietary] = useState(null);

    const handleClickAllergen = (event) => {
        setAnchorElAllergen(event.currentTarget);
    };

    const handleClickDietary = (event) => {
        setAnchorElDietary(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElAllergen(null);
        setAnchorElDietary(null);
    };

    const handleAddDietaryRestriction = (restriction) => {
        setDietaryRestrictions([...dietaryRestrictions, restriction]);
        handleClose();
    };

    const handleAddAllergen = (allergen) => {
        setAllergens([...allergens, allergen]);
        handleClose();
    };

    const openAllergen = Boolean(anchorElAllergen);
    const openDietary = Boolean(anchorElDietary);
    const idAllergen = openAllergen ? 'add-allergen-popover' : undefined;
    const idDietary = openDietary ? 'add-dietary-popover' : undefined;

    // Calculate the chip height dynamically for dietary restrictions
    const chipHeightDietary = styles.chip.minHeight; // Assuming minHeight is set in ProfileScreenStyles.js
    // Calculate the chip height dynamically for allergens
    const chipHeightAllergens = styles.chip.minHeight; // Assuming minHeight is set in ProfileScreenStyles.js
    const chipby2= chipHeightAllergens/2 

    return (
        <Box sx={styles.profilePage}>
            <Box sx={styles.profileBox}>
                <img src={require('./1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg')} alt="" style={styles.profileImg} />
            </Box>
            <Typography variant="h5" sx={{ ...styles.profileName, textAlign: 'left', marginTop: '10px' }}>Siddarth Marathe</Typography>
            <Box sx={styles.profileDetails}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Sex</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '100%', borderRadius: '6px', margin: '0', minHeight: 'unset' }} defaultValue="Male"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Age</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '100%', borderRadius: '6px', margin: '0', minHeight: 'unset' }} defaultValue="23"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Weight</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '100%', borderRadius: '6px', margin: '0', minHeight: 'unset' }} defaultValue="153"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Height</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '100%', borderRadius: '6px', margin: '0', minHeight: 'unset' }} defaultValue={height}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>A1C Level</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '100%', borderRadius: '6px', margin: '0', minHeight: 'unset' }} defaultValue="7.9%"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Insulin to Carb Ratio</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '50%', borderRadius: '6px', margin: '0',  minHeight: 'unset' }} defaultValue="12.7"/>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ ...styles.detailText, textAlign: 'left' }}><strong>Dietary Restrictions:</strong></Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {dietaryRestrictions.map((restriction, index) => (
                            <Chip
                                key={index}
                                label={restriction}
                                onDelete={() => setDietaryRestrictions(dietaryRestrictions.filter((_, i) => i !== index))}
                                sx={styles.chip}
                            />
                        ))}
                        {/* Button component for adding dietary restrictions */}
                        <Button onClick={handleClickDietary} sx={{ ml: 1, ...styles.chip, borderRadius: '50%', width:'3px', height: chipHeightDietary }}>
                            {/* Change width and height to chipHeightDietary */}
                            +
                        </Button>
                        {/* Popover for selecting dietary restrictions */}
                        <Popover
                            id={idDietary}
                            open={openDietary}
                            anchorEl={anchorElDietary}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            {/* List of dietary restrictions */}
                            <List sx={{ width: 200 }}>
                                {['Peanut', 'Soy', 'Shellfish', 'Lactose', 'Egg', 'Sesame', 'Sulfite'].map((restriction, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton onClick={() => handleAddDietaryRestriction(restriction)}>
                                            {restriction}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Popover>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ ...styles.detailText, textAlign: 'left' }}><strong>Allergens:</strong></Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {allergens.map((allergen, index) => (
                            <Chip
                                key={index}
                                label={allergen}
                                onDelete={() => setAllergens(allergens.filter((_, i) => i !== index))}
                                sx={styles.chip}
                            />
                        ))}
                        {/* Button component for adding allergens */}
                        <Button onClick={handleClickAllergen} sx={{ ml: 1, ...styles.chip, borderRadius: '50%', width:'3px', height: chipHeightAllergens }}>
                            {/* Change width and height to chipHeightAllergens */}
                            +
                        </Button>
                        {/* Popover for selecting allergens */}
                        <Popover
                            id={idAllergen}
                            open={openAllergen}
                            anchorEl={anchorElAllergen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            {/* List of allergens */}
                            <List sx={{ width: 200 }}>
                                {['Peanut', 'Soy', 'Shellfish', 'Lactose', 'Egg', 'Sesame', 'Sulfite'].map((allergen, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton onClick={() => handleAddAllergen(allergen)}>
                                            {allergen}
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Popover>
                    </Box>
                </Box>
            </Box>
            <NavBar />
        </Box>
    );
}

export default ProfileScreen;
