import { flexBox, fonts } from '../../styles/helpers-styles/styles.helper';

const Toastify = (theme) => {
  return {
    '& .Toastify__close-button > svg': {
      height: '1.25rem',
      width: '1.25rem',
    },

    '& .Toastify__toast--error': {
      '& .Toastify__toast-icon': {
        '& svg': {
          fill: `${theme.palette.background.error}}`,
        },
      },
    },

    '& .Toastify__toast--info': {
      '& .Toastify__toast-icon': {
        '& svg': {
          fill: `${theme.palette.background.primary}}`,
        },
      },
    },

    '& .Toastify__toast--success': {
      '& .Toastify__toast-icon': {
        '& svg': {
          fill: `${theme.palette.background.success}}`,
        },
      },
    },

    '& .Toastify__toast--warning': {
      '& .Toastify__toast-icon': {
        '& svg': {
          fill: `${theme.palette.background.warn}}`,
        },
      },
    },

    '& .Toastify__toast-icon': {
      height: '2rem',
      width: '2rem',
    },

    '& .toast_container': {
      ...flexBox('column', 'center', 'flex-start'),
      gap: '0.5rem',
      padding: '0.25rem 0.25rem 0.25rem 0.75rem',
    },

    '& .toast_headings': {
      color: theme.palette.text.primary,
      fontSize: '0.95rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      lineHeight: '1.3',
    },

    '& .toast_message': {
      ...fonts('0.9rem', '400', theme.palette.text.tertiary),
    },
  };
};

export default Toastify;
