import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import routes from './routes';
//import TypografyPagy from 'components/partilas/typography-pagy';
//import { Typography } from '@mui/material';

const router = createBrowserRouter([
  {
    path: routes.HomePage,
    element: <HomePage />,
  },
  {
    path:routes.typografyPage,
    
  }
]);

export default router;
