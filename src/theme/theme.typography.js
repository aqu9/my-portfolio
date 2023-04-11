const themeTypography = (theme) => {
  return {
    allVariants: {
      fontFamily: theme.palette.font.primary,
      hover:{
        color:"green"
      }
    },
    body1: {
      color: theme.palette.text.primary,
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },

    fontFamily: theme.palette.font.primary,

    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      hover:{
        color:"green"
      }
    },
    pxToRem: (size) => `${size / 20}rem`,
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 400,
    },
    subtitle3: {
      fontSize: '0.8rem',
      fontWeight: 400,
    },
  };
};

export default themeTypography;
