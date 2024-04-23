import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import styles from './LoginScreenStyles.js'

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(username)
        console.log(password)
    }
    const handleUserChange = (input) => {
        setUsername(input.target.value)
    }
    const handlePassChange = (input) => {
        setPassword(input.target.value)
    }
    return (
        <Box sx={styles.loginScreen}>
            <Typography sx={styles.LoginTextStyle} variant="h4">Login</Typography>
            <TextField 
                required
                value={username} 
                onChange={handleUserChange} 
                sx={styles.textField} 
                label="Username"
            />
            <TextField 
                value={password}
                required
                onChange={handlePassChange} 
                sx={styles.textField} 
                label="Password" 
                type="password"
                autoComplete='current-password'
            />
            <Button onClick={handleSubmit} sx={styles.submitButton} variant="contained">Submit</Button>
        </Box>
    );
}

export default LoginScreen;