// src/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      //use a light blue color
      main: '#2196f3',
    },
    secondary: {
      main: '#d5d5d5', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
