import { Box, Card, Container } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const socialMedialLogo= [<TwitterIcon fontSize="large"/>,<LinkedInIcon fontSize="large"/>,<GitHubIcon fontSize="large"/>]

const SideBar = () => {
    return (
        <Box sx={{ width: '50px', height: '150px', position: 'absolute', top: '50%', transform: 'translate(0,-50%)' }}>
            <Card sx={{ height: '100%', pt: 1 }}>
                {socialMedialLogo.map((logo, index) => {
                    return (
                        <Container
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: 'auto',
                                height: `calc(100% / ${socialMedialLogo.length})`,
                            }}
                        >
                            {logo}
                        </Container>
                    );
                })}
            </Card>
        </Box>
    );
}

export default SideBar