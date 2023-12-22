import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function NavigationLink({ text }) {
  return (
    <Link href="#"
      color="primary.main"
      sx={{
        textDecoration: 'none',
      }}
    >
      <Typography variant="body1"
        sx={{
          letterSpacing: 'normal',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: {
            lg: '16px',
            md: '13px',
            sm: '11px',
            xs: '8px',
            mobileL: '10px',

          },
          lineHeight: '28px',
        }}>
        {text}
      </Typography>
    </Link>
  );
}
export default NavigationLink;