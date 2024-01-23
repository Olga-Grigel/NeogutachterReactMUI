import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1400,
      md: 1195,
      sm: 1075,
      xs: 950,
      mobileL: 750,
      mobileM: 600,
      mobileS: 450,
      mobileMS: 391,
      mobileXS: 0
    },
  },
  palette: {
    primary: {
      main: '#252525',
      black: '#393939'
    },
    secondary: {
      main: '#DBFF00',
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
