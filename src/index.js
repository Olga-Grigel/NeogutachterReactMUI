import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1075,
      md: 1195,
      lg: 1400,
      xl: 1920,
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
