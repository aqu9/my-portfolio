import {
  flexBox,
  fonts,
  size,
} from '../../styles/helpers-styles/styles.helper';

const Form = (theme) => {
  return {
    Mui: {
      styleOverrides: {
        error: {
          color: theme.palette.text.error,
        },
        warn: {
          color: theme.palette.text.warn,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& label[data-shrink=false]': {
            top: '-0.28rem',
          },
          '& label[data-shrink=true]': {
            top: '0.14rem',
          },

          [theme.breakpoints.down('sm')]: {
            '& label[data-shrink=false]': {
              top: '-0.45rem !important',
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...fonts('0.84rem', '400', theme.palette.text.label),
          marginLeft: '0.2rem',
        },
        root: {
          ...size(),
          ...fonts('0.8rem', '400', theme.palette.text.primary),
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          ...size(),
          ...flexBox(),
          gap: '0 1rem',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '& .Mui-error': {
            color: theme.palette.text.error,
          },

          color: theme.palette.text.primary,
        },
      },
    },
  };
};

export default Form;
