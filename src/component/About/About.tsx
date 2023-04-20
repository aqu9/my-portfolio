/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
const skills = ["HTML",  "CSS",  "JavaScript",  "React",  "SASS",  "GIT",  "Github",  "Responsive Design",  "SEO",  "Terminal",  "Express Basics",  "SQL Basics"];

const About = () => {
  return (
    <Box sx={{height:"inherit", mx:25}}>
      <Box sx={{width: '100%'}}>
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
      <Box sx={{ display: 'flex' ,flexDirection: { xs: 'column', sm: 'row' }, columnGap:5 }}>
        <Box sx={{width:{xs:"100%", sm:"50%"}}}>
          <Typography variant="h1"  sx={{py:2, color:"black"}}>Get to know me!</Typography>
          <Typography variant='h4' sx={{wordBreak:"break-all", fontSize:"18px"}}>
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
          <Box sx= {{width:"100%", display:"flex",my:4, justifyContent:"flex-start"}}>
                        <Button variant="contained" sx={{px:5, py:2}}>
                            <Typography variant='h3'>CONTACT</Typography>
                        </Button>
                    </Box>
        </Box>
        <Box sx={{width:{xs:"100%", sm:"50%",}}}>

        <Typography variant="h1"  sx={{py:2, color:"black"}}>My Skills</Typography>
          <Box sx={{display:'flex', flexWrap: "wrap", gap:1}}>

          { 
            skills.map((skill,index)=>{
              return (
                <Chip key={index} sx={{background:"black"}} label={<Typography variant="h5" sx={{color:"white"}}>{skill}</Typography>}/>
              )
            })
          }
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default About;
