import Logo from '../../components/Logo/Logo.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import React from 'react';
import Box from '@mui/material/Box';


export default function HeaderDesktop() {

  return (
    <Box display="flex"
      sx={{
        display: {
          xs: 'flex',
          mobileXS: 'none'
        },
        justifyContent: "space-between",
      }}>
      <Logo />
      <Navigation />
    </Box>
  );
}
