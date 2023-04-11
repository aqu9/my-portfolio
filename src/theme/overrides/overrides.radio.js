import { size } from '../../styles/helpers-styles/styles.helper';

const Radio = (theme) => {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          '& svg': {
            ...size('1rem', '1rem'),
          },
          color: theme.palette.text.label,

          padding: '0.25rem',
        },
      },
    },
  };
};

export default Radio;
