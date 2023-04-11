import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'rgb(254, 241, 216)',
        color: '#0F2972',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgb(251 251 251 / 31%)',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiSnackbar: {
      root: {
        borderRadius: '25px',
      },
    },
    MuiTab: {
      root: {
        fontSize: '12px',
        textTransform: 'none',
      },
    },
    MuiTableCell: {
      head: {
        backgroundColor: '#0F2972 !important',
        color: 'white',
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      },
    },
  },
  palette: {
    error: {
      main: '#BD0000',
    },
    primary: {
      dark: '#0F2972',
      light: '#0F2972',
      main: '#0F2972',
    },
    secondary: {
      dark: '#0F2972',
      light: '#DDDDDD',
      main: '#0F2972',
    },
  },
  typography: {
    body1: {
      color: '#0F2972',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '26px',
    },

    body2: {
      color: '#0F2972',
      fontSize: '20px',
      fontWeight: 400,
    },
    button: {
      textTransform: 'capitalize',
    },
    caption: {
      color: '#0F2972',
      fontSize: 12,
      fontWeight: 300,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    h1: {
      color: '#0F2972',
      fontSize: 30,
      fontWeight: 900,
    },
    h2: {
      color: '#0F2972',
      fontSize: 24,
      fontWeight: 900,
    },
    h3: {
      color: '#0F2972',
      fontSize: 20,
      fontWeight: 'bold',
    },
    h5: {
      color: ' #0F2972',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    h6: {
      color: '#0F2972',
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitle1: {
      color: '#0F2972',
      fontSize: 20,
    },
    subtitle2: {
      color: '#9B9B9B',
      fontSize: 14,
    },
    subtitle3: {
      color: ' #0F2972',
      fontSize: 14,
      // fontWeight: "bold",
    },
  },
});

export default theme;
