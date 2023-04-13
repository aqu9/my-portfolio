/* eslint-disable react/no-unescaped-entities */
import { Box, Chip, Divider, Typography } from '@mui/material';
const skills = ["HTML",  "CSS",  "JavaScript",  "React",  "SASS",  "GIT",  "Github",  "Responsive Design",  "SEO",  "Terminal",  "Express Basics",  "SQL Basics"];

const About = () => {
  return (
    <Box>
      <Box sx={{ pt: 5, width: '100%' }}>
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
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' ,flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box sx={{flex:1}}>
          <Typography variant="h2">Get to know me!</Typography>
          <Typography variant='h5'>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
          </Typography>
        </Box>
        <Box sx={{flex:1}}>
          {/* <Box sx={{display:'flex', gap:1}}> */}

          {
            skills.map((skill,index)=>{
              return (
                <Chip key={index} label={<Typography variant="h5" sx={{color:"white"}}>{skill}</Typography>}/>
              )
            })
          }
          {/* </Box> */}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default About;
