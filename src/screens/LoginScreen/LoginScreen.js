import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    TextField, 
    FormControl, 
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'

import styles from './LoginScreenStyles.js'
import { currUserAtom } from '../../atoms.js';
import { useAtom } from 'jotai';

// Import the image
import topImage from './top.JPG'; // Update with the actual image file name and extension

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useAtom(currUserAtom);
    const handleSubmit = () => {
        console.log(username);
        console.log(password);
        setUser(username);
    }
    const handleUserChange = (input) => {
        setUsername(input.target.value);
    }
    const handlePasswordChange = (input) => {
        setPassword(input.target.value);
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box sx={styles.loginScreen}>
            <img src={topImage} alt="Placeholder Image" style={{ height: '30vh', width: '100%', objectFit: 'cover' }} />
            <Typography variant="h5" sx={styles.welcomeText}>Welcome back!</Typography>
            <Typography sx={{ ...styles.loginText, ...styles.LoginTextStyle }} variant="h4" align="left">Login</Typography>
            <TextField 
                required
                value={username} 
                onChange={handleUserChange} 
                sx={{ ...styles.textField, textAlign: 'left' }} // Apply styles to TextField using sx prop
                label="Username"
                variant="outlined" // Add variant prop for outlined input
            />
            <FormControl sx={{ ...styles.textField, textAlign: 'left' }} variant="outlined"> {/* Apply styles to FormControl using sx prop */}
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handlePasswordChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Button onClick={handleSubmit} sx={{ ...styles.submitButton, marginLeft: 0 }} variant="contained">Submit</Button>
        </Box>
    );
}

export default LoginScreen;
