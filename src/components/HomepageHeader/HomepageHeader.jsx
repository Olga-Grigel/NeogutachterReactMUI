import HeaderDesktop from '../HeaderDesktop/HeaderDesktop'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HeaderMobile from '../HeaderMobile/HeaderMobile'


export default function HomepageHeader() {

  return (
    <Box
      sx={{
        padding: {
          xs: '28px 48px 0',
          mobileXS: '16px 16px 0'
        },
      }}>
      <AppBar position="static" color='secondary'
        sx={{
          borderRadius: "24px",
          boxShadow: "none",
          p: {
            md: "32px 32px 32px 48px",
            mobileXS: '29px 24px'
          },
          mb: '28px'
        }}>
        <HeaderDesktop />
        <HeaderMobile />
      </AppBar>
    </Box>
  );
}
