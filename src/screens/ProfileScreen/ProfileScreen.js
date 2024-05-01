import React, { useState } from 'react';
import { Box, Typography, TextField, Chip, Grid } from '@mui/material';
import styles from './ProfileScreenStyles.js';
import NavBar from '../../components/NavBar/NavBar.js';

const ProfileScreen = () => {
    // Define initial dietary restrictions
    const [dietaryRestrictions, setDietaryRestrictions] = useState(['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free']);

    // Define initial allergens
    const [allergens, setAllergens] = useState(['Nut', 'Seafood', 'Gluten']);

    // Function to handle chip deletion for dietary restrictions
    const handleDelete = (restrictionToDelete) => {
        const newRestrictions = dietaryRestrictions.filter(restriction => restriction !== restrictionToDelete);
        setDietaryRestrictions(newRestrictions);
    };

    // Function to handle chip deletion for allergens
    const handleAllergenDelete = (allergenToDelete) => {
        const newAllergens = allergens.filter(allergen => allergen !== allergenToDelete);
        setAllergens(newAllergens);
    };

    // Function to handle chip click for dietary restrictions
    const handleClick = (restrictionClicked) => {
        console.log(`Clicked on ${restrictionClicked}`);
        // Implement logic for handling chip click if needed
    };

    // Function to handle chip click for allergens
    const handleAllergenClick = (allergenClicked) => {
        console.log(`Clicked on ${allergenClicked}`);
        // Implement logic for handling chip click if needed
    };

    return (
        <Box sx={{ ...styles.profilePage, marginTop: '20px' }}>
            <Box sx={styles.profileBox}>
                <img src={require('./1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg')} alt="" style={styles.profileImg} />
            </Box>
            <Typography variant="h5" sx={{ ...styles.profileName, textAlign: 'left', marginTop: '10px' }}>John Doe</Typography>
            <Box sx={styles.profileDetails}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Sex</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '30px', borderRadius: '10px', margin: '0' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Age</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '30px', borderRadius: '10px', margin: '0' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Weight</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px',height: '30px', borderRadius: '10px', margin: '0' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Height</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '30px', borderRadius: '10px', margin: '0' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>A1C Level</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '30px', borderRadius: '10px', margin: '0' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ ...styles.detailText, textAlign: 'left', margin: '0', padding: '0' }}><strong>Insulin to Carb Ratio</strong></Typography>
                            <TextField sx={{ ...styles.textField, width: '129px', height: '30px', margin: '0' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ ...styles.detailText, textAlign: 'left' }}><strong>Dietary Restrictions:</strong></Typography>
                    <Box>
                        {dietaryRestrictions.map((restriction, index) => (
                            <Chip
                                key={index}
                                label={restriction}
                                onDelete={() => handleDelete(restriction)}
                                onClick={() => handleClick(restriction)}
                                sx={styles.chip}
                            />
                        ))}
                    </Box>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ ...styles.detailText, textAlign: 'left' }}><strong>Allergens:</strong></Typography>
                    <Box>
                        {allergens.map((allergen, index) => (
                            <Chip
                                key={index}
                                label={allergen}
                                onDelete={() => handleAllergenDelete(allergen)}
                                onClick={() => handleAllergenClick(allergen)}
                                sx={styles.chip}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
            <NavBar />
        </Box>
    );
}

export default ProfileScreen;
