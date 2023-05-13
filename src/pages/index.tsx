import About from '@app/component/About/About';
import Contact from '@app/component/Contact/Contact';
import PersonalInfo from '@app/component/PersonalInfo';
import Projects from '@app/component/Project/Project';
import Header from '@app/component/header';
import { setProfileStore } from '@app/store/store';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import data from '../data/rupesh.json';
export default function Home() {
  useEffect(() => {
    (async () => {
      const response: any = await fetch(
        `api/getDatafromDrive?fid=${'1Q3qcZr76Ej6uLMvDgBOdBaL1HIh9yGYI'}`
      );
      console.log(response, 'body');
      const body = await response.json();
      console.log(body, 'body');
      setProfileStore(body);
    })();
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ height: '100vh', py: '70px' }} id='HOME'>
        <PersonalInfo />
      </Box>
      <Box
        sx={{
          height: { xs: 'auto', sm: 'auto' },
          py: '70px',
          background: '#3C4043',
        }}
        id='ABOUT'>
        <About />
      </Box>
      <Box sx={{ height: 'auto', py: '70px' }} id='PROJECTS'>
        <Projects />
        {/* <Laptop /> */}
      </Box>
      <Box
        sx={{ height: 'auto', py: '70px', background: '#3C4043' }}
        id='CONTACT'>
        <Contact />
      </Box>
    </>
  );
}
