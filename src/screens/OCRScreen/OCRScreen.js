import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import styles from './OCRScreenStyles.js'

const OCRScreen = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    const handleExtractText = () => {
        if (image) {
        setIsLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => console.log(m),
        })
        .then(({ data: { text } }) => {
            setText(text);
            setIsLoading(false);
            })
            .catch((error) => {
            console.error(error);
            setIsLoading(false);
            });
        }
    };

    return (
        <div>
        <input type="file" accept="image/*" onChange={fileChange} />
        <button onClick={handleExtractText} disabled={isLoading}>
            {isLoading ? 'Extracting...' : 'Extract Text'}
        </button>
        {text && <p>Extracted Text: {text}</p>}
        </div>
    );
}

export default OCRScreen;