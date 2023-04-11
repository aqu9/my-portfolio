import Toastify from './overwrite.toast';

const CssBaseline = (theme) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          height: '100%',
          width: '100%',
        },
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        body: {
          fontFamily: theme.palette.font.primary,
          height: '100%',
          width: '100%',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          WebkitOverflowScrolling: 'touch',
          fontFamily: theme.palette.font.primary,
          height: '100%',
          width: '100%',

          [theme.breakpoints.down('xl')]: {
            fontSize: `${theme.palette.fontSize.xl}px`,
          },
          [theme.breakpoints.down('lg')]: {
            fontSize: `${theme.palette.fontSize.lg}px`,
          },
          [theme.breakpoints.down('md')]: {
            fontSize: `${theme.palette.fontSize.md}px`,
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: `${theme.palette.fontSize.sm}px`,
          },

          ...Toastify(theme),
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        input: {
          '&[type=number]': {
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            MozAppearance: 'textfield',
          },
        },
      },
    },
  };
};

export default CssBaseline;
