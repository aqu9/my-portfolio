import { size } from '../../styles/helpers-styles/styles.helper';

const Input = (theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        loading: {
          color: theme.palette.text.label,
        },
        noOptions: {
          color: theme.palette.text.label,
        },
        root: {
          '& .MuiOutlinedInput-root': {
            padding: '0 0.5rem',
          },
        },
      },
    },
    MuiCalendarOrClockPicker: {
      styleOverrides: {
        root: {
          flexDirection: 'column-reverse',
          paddingBottom: '0.5rem',
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '.MuiPickersDay-root:not(.Mui-selected)': {
            borderColor: theme.palette.background.primary,
          },
          '.MuiTypography-root': {
            color: theme.palette.text.primary,
          },
          '.MuiTypography-root:disabled': {
            color: theme.palette.action.disabled,
          },
          height: 'fit-content',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.background.primary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        height: '4rem !important',
        input: {
          '&::placeholder': {
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.label,
          fontSize: '0.9rem',
          top: '-0.28rem',

          [theme.breakpoints.down('md')]: {
            top: '-0.45rem',
          },
        },
      },
    },
    MuiMonthPicker: {
      styleOverrides: {
        root: {
          '.MuiTypography-root ': {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...size('100%', '2.625rem'),
          '& .MuiAutocomplete-endAdornment': {
            top: 'calc(2.625rem * 0.24)',
          },
          borderRadius: '5px',

          fontSize: '0.8rem ',
        },
      },
    },
    MuiTextField: {
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
    MuiYearPicker: {
      styleOverrides: {
        root: {
          '.PrivatePickersYear-yearButton ': {
            fontSize: '1rem',
          },
        },
      },
    },
  };
};

export default Input;
