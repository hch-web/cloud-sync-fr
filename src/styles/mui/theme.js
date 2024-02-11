const { createTheme } = require('@mui/material');

// CUSTOMIZE MUI THEME HERE!
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins, sans-serif',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },

  palette: {
    primary: {
      main: '#e90dca',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1536f1',
      contrastText: '#000',
    },
  },
});

export default theme;
