const Backdrop = (theme) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
          background: [theme.palette.background.backdrop],
        },
      },
    },
  };
};

export default Backdrop;
