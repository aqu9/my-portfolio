import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SideBar from '../Nav/SideBar';

const PersonalInfo = () => {
    return (
        <Box sx={{height: 'calc(100% - 70px)' }} id="HOME">
            <Box sx={{position:"relative", top:"50%"}}>
                <SideBar/>
            </Box>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', ml:"50px" }}>
                <Box>
                    <Typography variant='h1' sx={{textAlign:"center"}}>HEY, I'M Aquib Ahmad</Typography>
                    <Typography variant='h3' sx= {{my:5, mx:5, textAlign:"center", maxWidth:"90%"}}>
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to
                        the success of the overall product
                    </Typography>
                    <Box sx= {{width:"100%", display:"flex", justifyContent:"center"}}>
                        <Button variant="contained" sx={{px:10, py:2}}>
                            <Typography variant='h3'>Projects</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PersonalInfo;