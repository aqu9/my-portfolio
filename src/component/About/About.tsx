/* eslint-disable react/no-unescaped-entities */
import { getProfile } from '@app/store/store';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import Link from 'next/link';
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'GIT',
  'Github',
  'Responsive Design',
  'SEO',
  'Terminal',
  'Express Basics',
  'SQL Basics',
];

const About = () => {
  const profile = getProfile();

  return (
    <Box sx={{ height: 'inherit', mx: 25 }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          variant='h1'
          textAlign={'center'}
          sx={{ textTransform: 'uppercase' }}>
          About ME
        </Typography>
        <Divider
          sx={{ height: '0.2rem', mx: { xs: 5, md: 25 }, background: 'black' }}
        />
        <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h3' textAlign={'center'} sx={{ width: '70rem' }}>
            {profile?.about?.aboutInfo}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          columnGap: 5,
        }}>
        <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
          <Typography variant='h1' sx={{ py: 2, color: 'black' }}>
            Get to know me!
          </Typography>
          <Typography variant='h4' sx={{ fontSize: '18px' }}>
            {profile?.about?.description}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              my: 4,
              justifyContent: 'flex-start',
            }}>
            <Button variant='contained' sx={{ px: 5, py: 2 }}>
              <Link href='#CONTACT'>
                <Typography variant='h3'>CONTACT</Typography>
              </Link>
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
          <Typography variant='h1' sx={{ py: 2, color: 'black' }}>
            My Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {profile?.about?.skills.map((skill: string, index: any) => {
              return (
                <Chip
                  key={index}
                  sx={{ background: 'black' }}
                  label={
                    <Typography variant='h5' sx={{ color: 'white' }}>
                      {skill}
                    </Typography>
                  }
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default About;
