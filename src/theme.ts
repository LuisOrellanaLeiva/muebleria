// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a86ff', // Un azul brillante como color principal
    },
    secondary: {
      main: '#ff006e', // Un acento en rosa fuerte
    },
    background: {
      default: '#f4f4f4', // Color de fondo neutro
      paper: '#ffffff', // Fondo de los elementos
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
