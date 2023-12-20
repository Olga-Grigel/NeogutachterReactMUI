import './HomepageHeader.css';
import Navigation from '../Navigation/Navigation.jsx'
import Link from '@mui/material/Link';
import imageLogo from '../../images/logo.svg';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


export default function HomepageHeader() {

  return (
    <div>
      <AppBar position="static" color='secondary'
        sx={{
          borderRadius: "24px",
          boxShadow: "none",
          p: "32px 32px 32px 48px",
          mb: '28px'
        }}>
        <Box display="flex"
          sx={{
            justifyContent: "space-between",
          }}>
          <Link href="#"
            sx={{
              textAlign: 'center', verticalAlign: 'medium'

            }}
          ><img className="header__logo" src={imageLogo} alt="Логотип" /></Link>
          <Navigation />
        </Box>
      </AppBar>
    </div>
  );
}
