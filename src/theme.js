// theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ff9800', 
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? '#333333' : '#bbbbbb',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
        },
        containedPrimary: {
          backgroundColor: '#4caf50',
          color: '#fff',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          marginTop: '20px',
          minWidth: 650,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          color: mode === 'light' ? '#333' : '#ffffff',
        },
        body: {
          fontSize: '0.9rem',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#4caf50',
          '&:hover': {
            color: mode === 'light' ? '#388e3c' : '#66bb6a',
          },
        },
      },
    },
  },
});

export default getTheme;
