import React from 'react';
import { 
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    Typography,
    Box,
} from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';

import styles from './RecipeCardStyles';
import { useAtom } from 'jotai';
import { icrAtom } from '../../atoms';


const RecipeCard = ({recipe}) => {
    const { image: imageLink, summary: description, title: dishName, nutrition: macros } = recipe;
    const gramsOfCarbs = macros['nutrients']['3']['amount']
    const [icr, _] = useAtom(icrAtom)

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
            <Box sx={styles.sugarLevel}>
                <Typography>{(gramsOfCarbs / icr).toFixed(1)}</Typography>
                <VaccinesIcon/>
            </Box>
        </Card>
    );
}

export default RecipeCard;