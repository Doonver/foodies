import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import styles from './CuisineButtonsStyles';
import { useAtom } from 'jotai';
import { currPageAtom, recipesAtom } from '../../atoms';

const images = [
  {
    url: '/mexican.jpeg',
    title: 'Mexican',
  },
  {
    url: '/italian.jpeg',
    title: 'Italian',
  },
  {
    url: '/asian.jpeg',
    title: 'Asian',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '20px',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  borderRadius: '20px',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  borderRadius: '20px',
}));

const CuisineButtons = () => {
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = "b78f11225f014087a32f54070b440e30";
  const [page, setPage] = useAtom(currPageAtom);
  const [recipe, setRecipes] = useAtom(recipesAtom)


  const handleCuisineSearch = (cuisine) => {
    console.log('Search triggered with value:', cuisine);
    const fullUrl = `${url}?&apiKey=${apiKey}&addRecipeNutrition=true&cuisine=${cuisine}`;
    console.log(fullUrl)
    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data['results'])
            setRecipes(data['results'])
        })
        .catch(error => {
            console.error("Error:", error);
        });
    setPage('Search')
  }
  return (
    <Box sx={styles.container}>
      {images.map((image) => (
        <ImageButton
          key={image.title}
          style={styles.imageButton}
          onClick={() => handleCuisineSearch(image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={styles.text}
            >
              {image.title}
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

export default CuisineButtons;