import { styled } from '@mui/material/styles';

import { flexBox, size } from '../../styles/helpers-styles/styles.helper';

export const Wrapper = styled('div')(({ theme }) => ({
  ...flexBox('row', 'center', 'flex-start'),
  padding: '0px',

  [theme.breakpoints.down('md')]: {
    padding: '5% 15%',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '5% 2%',
  },
}));

export const FormCardWrapper = styled('form')(({ theme }) => ({
  ...flexBox('row', 'flex-start', 'flex-start'),
  ...size('100%', 'auto'),
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  flexWrap: 'wrap',
  padding: '2rem 1rem',

  [theme.breakpoints.down('md')]: {
    ...size('100%', 'auto'),
  },

  [theme.breakpoints.down('sm')]: {
    background: 'transparent',
    boxShadow: 'none',
  },
}));

export const FieldWrap = styled('div')(({ theme, button, alignment }) => ({
  flexBasis: '50%',
  marginBottom: '20px',
  maxWidth: '50%',
  padding: ' 0 15px',

  ...(button && {
    flexBasis: '100%',
    margin: '40px 0 10px',
    maxWidth: '100%',
    textAlign: 'center',
  }),

  ...(alignment && { ...alignment }),

  [theme.breakpoints.down('sm')]: {
    flexBasis: '100%',
    maxWidth: '100%',
  },
}));

export const ButtonWrap = styled('div')(({ theme }) => ({
  ...flexBox(),

  [theme.breakpoints.down('sm')]: {
    ...flexBox('row', 'space-between'),
  },
}));
