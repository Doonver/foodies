import React from 'react';
import { 
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    Typography,
    Box
} from '@mui/material';

import styles from './RecipeCardStyles';


const RecipeCard = ({recipe}) => {
    const { image: imageLink, summary: description, title: dishName } = recipe;
    return (
            <Card sx={styles.recipeCard}>
            <CardHeader
                title={dishName}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageLink}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: description.substring(0, 160) + '...' }}>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RecipeCard;