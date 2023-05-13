import { getProfile } from '@app/store/store';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import SideBar from '../Nav/SideBar';

const PersonalInfo = () => {
  const profile = getProfile();

  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ position: 'relative', top: '50%' }}>
        <SideBar />
      </Box>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ml: '50px',
        }}>
        <Box>
          <Typography variant='h1' sx={{ textAlign: 'center' }}>
            HEY, I'M {profile?.profileData?.name}
          </Typography>
          <Typography
            variant='h3'
            sx={{ my: 5, mx: 5, textAlign: 'center', maxWidth: '90%' }}>
            {profile?.profileData?.profileBio}
          </Typography>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ px: 10, py: 2 }}>
              <Link href='#PROJECTS'>
                <Typography variant='h3'>Projects</Typography>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
