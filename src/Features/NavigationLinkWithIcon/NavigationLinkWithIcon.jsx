import './NavigationLinkWithIcon.css'
import * as React from 'react';
import NavigationLink from '../../components/NavigationLink/NavigationLink'
import Box from '@mui/material/Box';


function NavigationLinkWithIcon({ text, icon }) {
  return (
    <Box display={'flex'}
      sx={{
        textDecoration: 'inherit',
        ml: "16px",
        mr: "16px",
        lineHeight: '28px',
        alignItems: 'center'
      }}
    >
      <img className="navigation__icon_before_text" src={icon} alt="icon" />
      <NavigationLink text={text} />
    </Box>
  );
}
export default NavigationLinkWithIcon;