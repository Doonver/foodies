import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './ProfileScreenStyles.js';

const ProfileScreen = () => {
    return (
        <Box sx={styles.profilePage}>
            <Box sx={{ ...styles.profileInfo, marginBottom: '20px' }}>
                <img src="profile.jpg" alt="Profile Picture" style={styles.profileImg} />
                <Typography variant="h5">John Doe</Typography>
            </Box>
            <Box sx={styles.profileDetails}>
                <Typography sx={styles.detailText}><strong>A1C Level:</strong></Typography>
                <TextField sx={styles.textField} label="A1C Level" />
                <Typography sx={styles.detailText}><strong>ICR Value:</strong></Typography>
                <TextField sx={styles.textField} label="ICR Value" />
                <Typography sx={styles.detailText}><strong>Dietary Restrictions:</strong></Typography>
                <Box sx={styles.dietaryRestrictions}>
                    <label style={styles.checkboxLabel}><input type="checkbox" name="restriction" value="vegetarian" /> Vegetarian</label>
                    <label style={styles.checkboxLabel}><input type="checkbox" name="restriction" value="vegan" /> Vegan</label>
                    <label style={styles.checkboxLabel}><input type="checkbox" name="restriction" value="gluten-free" /> Gluten-free</label>
                    <label style={styles.checkboxLabel}><input type="checkbox" name="restriction" value="dairy-free" /> Dairy-free</label>
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileScreen;
