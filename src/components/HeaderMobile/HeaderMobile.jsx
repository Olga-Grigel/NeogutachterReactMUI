import Logo from '../Logo/Logo.jsx'
import React from 'react';
import Box from '@mui/material/Box';
import NavigationIcon from '../NavigationIcon/NavigationIcon.jsx';
import burgerMemu from '../../images/BurgerMenu.svg';
import search from '../../images/search.svg';


export default function HeaderMobile() {

  return (
    <Box display="flex"
      sx={{
        display: {
          xs: 'none',
          mobileXS: 'flex'
        },
        justifyContent: "space-between",
      }}>
      <NavigationIcon icon={search} />
      <Logo />
      <NavigationIcon icon={burgerMemu} />
    </Box>
  );
}
