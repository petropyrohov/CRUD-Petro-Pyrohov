import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { height } from '@mui/system';

const HomePage = () => (
  <Box sx= {{height: '100vh',display:'grid',placeItems:'centrer'}}>
  <Container sx={{textAlign:'center'}}>
    <Typography variant="h1">React - TS - Eslint -MUI - project template</Typography>
    <Box sx={{ 
      height:200,
      py:3,
      bgcolor:'grey.700',
      color: 'common.white',
      display: 'flex',
      alignItems:'centr',
      justifyContent: 'centr',
      flexDirection:'column'

      }}
      >
      <Typography variant ="h2">Open this File in "</Typography>
      <Typography>"src/pages/home-page.tsx </Typography>

    </Box>

 </Container>
 </Box>
);

export default HomePage;
