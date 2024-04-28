import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import styles from './OCRScreenStyles.js'

const OCRScreen = () => {
    console.log("hi");
    const ocrSpaceApi = require('./lib/ocrSpaceAPI');

    var options =  { 
        apikey: 'K84058024588957',
        language: 'eng', 
        imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
        isOverlayRequired: true
    };

    // Image file to upload
    const imageFilePath = "https://www.dailylocal.com/wp-content/uploads/migration/2019/01/120341f55edc2c5ab19d369379cbd4ab.jpg?w=1024";

    console.log(ocrSpaceApi.parseImageFromUrl(imageFilePath, options));

    // Run and wait the result
    ocrSpaceApi.parseImageFromUrl(imageFilePath, options)
    .then(function(parsedResult) {
        console.log('parsedText: \n', parsedResult.parsedText);
        console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
    }).catch(function(err) {
        console.log('ERROR:', err);
    });
}

export default OCRScreen;