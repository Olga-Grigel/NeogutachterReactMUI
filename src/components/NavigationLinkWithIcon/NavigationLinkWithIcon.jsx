import './NavigationLinkWithIcon.css'
import * as React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink'
import Link from '@mui/material/Link';



function NavigationLinkWithIcon({ text, icon }) {
  return (
    <Link href="inherit" display={'flex'}
      sx={{
        textDecoration: 'inherit',
        ml: "16px",
        mr: "16px",
        lineHeight: '28px',
        alignItems: 'center'
      }}
    >
      <img className="navigation__icon_before_text" src={icon} alt="immage icon" />
      <NavigationLink text={text} />
    </Link>
  );
}
export default NavigationLinkWithIcon;