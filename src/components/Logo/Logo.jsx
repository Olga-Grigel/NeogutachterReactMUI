import './Logo.css';
import Link from '@mui/material/Link';
import imageLogo from '../../images/logo.svg';
import React from 'react';


export default function Logo() {

  return (
    <Link href="#"
      sx={{
        textAlign: 'center'

      }}
    ><img className="header__logo" src={imageLogo} alt="Логотип" /></Link>
  )
}
