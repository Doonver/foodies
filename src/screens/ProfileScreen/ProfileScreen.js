import React from 'react';
import { Box, Typography, TextField, Checkbox } from '@mui/material';
import styles from './ProfileScreenStyles.js';
import NavBar from '../../components/NavBar/NavBar.js';

const ProfileScreen = () => {
    return (
        <Box sx={styles.profilePage}>
            <Box sx={styles.profileBox}>
                <img src={require('./1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg')} alt="Profile Picture" style={styles.profileImg} />
                <Typography variant="h5" sx={styles.profileName}>John Doe</Typography>
            </Box>
            <Box sx={styles.profileDetails}>
                <Typography sx={styles.detailText}><strong>A1C Level:</strong></Typography>
                <TextField sx={styles.textField} label="A1C Level" />
                <Typography sx={styles.detailText}><strong>ICR Value:</strong></Typography>
                <TextField sx={styles.textField} label="ICR Value" />
                <Typography sx={styles.detailText}><strong>Dietary Restrictions:</strong></Typography>
                <Box sx={styles.dietaryRestrictions}>
                    <label style={styles.checkboxLabel}><Checkbox name="vegetarian" /> Vegetarian</label>
                    <label style={styles.checkboxLabel}><Checkbox name="vegan" /> Vegan</label>
                    <label style={styles.checkboxLabel}><Checkbox name="glutenFree" /> Gluten-free</label>
                    <label style={styles.checkboxLabel}><Checkbox name="dairyFree" /> Dairy-free</label>
                </Box>
            </Box>
            <NavBar/>
        </Box>
    );
}

export default ProfileScreen;
