const Button = (theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&: hover': {
            backgroundColor: theme.palette.background.secondary,
            color: '#000000',
          },
          backgroundColor: theme.palette.background.primary,

          color: '#FFFFFF',
        },
        root: {
          fontSize: '0.9rem',
          fontWeight: '400',
          padding: '0.65rem 1rem',
          textTransform: 'none',
        },
        selectType: {
          borderRadius: '5px',
          fontSize: '0.9rem',
          textTransform: 'none',
        },
        selectTypeError: {
          border: `1px solid ${theme.palette.background.error}`,
          color: theme.palette.text.error,
        },
        selectTypePrimary: {
          border: `1px solid ${theme.palette.background.primary}`,
        },
        selectTypeSecondary: {
          '&: hover': {
            border: `1px solid ${theme.palette.background.primary}`,
          },

          border: `1px solid ${theme.palette.background.border}`,
        },
      },
    },
  };
};

export default Button;
