import * as React from 'react';
import Link from '@mui/material/Link';



function NavigationIcon({ icon }) {
  return (
    <Link href="inherit" display={'flex'}
      sx={{
        textDecoration: 'inherit'
      }}
    >
      <img className="navigation__icon" src={icon} alt="immage icon" />
    </Link>
  );
}
export default NavigationIcon;