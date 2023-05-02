import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@app/component/header';
import { findProjectById } from '@app/helper/utils';
import { Box, Typography, Divider, Chip, Button } from '@mui/material';
import Link from 'next/link';

const Project = [
    {
        id: 1,
        companyName: 'valuebound',
        client: 'EnsuredIT',
        projName: 'Ice - 2.0',
        startDate: 'jan 2015',
        endDate: 'jan 2023',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Github', 'Responsive Design', 'SEO'],
        description:
            "Dopefolio is an Open-Source project which is a simple and clean multi-page portfolio website template for developers. I created this project for developers to quickly build a good-looking and fast-performing multi-page portfolio without having to code their portfolio from scratch. Since the launch of this project, It has received more than 2k stars on Github and it has also got featured on hundreds of sites and CSS-tricks.com has also featured this template as the hottest frontend tool of 2021 in one of their articles which you can find here Dopefolio is now being used by thousands of developers globally and it has helped many people in landing jobs & opportunities which makes me happy that my creation is helping other people in building their careers. It has many other features like Dopefolio's repo contains a playground link which people can use to test the template with different theme colours to find their own preferred primary colour for the template. Feel free to check out the Project by visiting the Project Link.",
        keyPoint: ['key', 'responsibilty', 'gello'],
        image: 'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
    },
    {
        id: 2,
        companyName: 'valuebound',
        client: 'EnsuredIT',
        projName: 'Ice - 2.0',
        startDate: 'jan 2015',
        endDate: 'jan 2023',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Github', 'Responsive Design', 'SEO'],
        description:
            'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
        keyPoint: ['key', 'responsibilty', 'gello'],
        image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0ub_mptr31_bh_macbook_pro_i7_3_1ghz_1343167.jpg',
    },
    {
        id: 3,
        companyName: 'valuebound',
        client: 'EnsuredIT',
        projName: 'Ice - 2.0',
        startDate: 'jan 2015',
        endDate: 'jan 2023',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Github', 'Responsive Design', 'SEO'],
        description:
            'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
        keyPoint: ['key', 'responsibilty', 'gello'],
        image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0ub_mptr31_bh_macbook_pro_i7_3_1ghz_1343167.jpg',
    },
];

const ProjectsDetails = () => {
    const {
        query: { id },
    } = useRouter();
    const [selectedProject, setSelectedProject] = useState<any>();
    useEffect(() => {
        if (id) setSelectedProject(findProjectById(parseInt(id as string), Project));
    }, [id]);

    console.log(selectedProject);
    return (
        <Box sx={{ height: '100%' }}>
            <Header />
            <Box sx={{ width: '100%', mt: '70px', background: '#3C4043' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        component={'img'}
                        src={'/project_img1.jpg'}
                        alt='project-image'
                        sx={{ height: '50%', width: '50%' }}
                    />
                </Box>

                <Box sx={{ height: 'inherit', mx: 25 }}>
                    <Typography variant='h1' textAlign={'center'} sx={{ textTransform: 'uppercase' }}>
                        Project Overview
                    </Typography>
                    <Divider sx={{ height: '0.2rem', mx: { xs: 5, md: 25 }, background: 'black', my: 2 }} />
                    <Typography
                        variant='h5'
                        dangerouslySetInnerHTML={{ __html: selectedProject?.description.replace(/\./g, '.<br /> <br />') }}
                    />
                </Box>
                <Box sx={{ mx: 25 }}>
                    <Typography variant='h1' textAlign={'center'} sx={{ textTransform: 'uppercase' }}>
                        Tech Stacks
                    </Typography>
                    <Divider sx={{ height: '0.2rem', mx: { xs: 5, md: 25 }, background: 'black', my: 2 }} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedProject?.techStack.map((skill: string, index: number) => {
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
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        py: 4,
                        justifyContent: 'center',
                        gap:5,
                    }}
                >
                    <Button variant='contained' sx={{ px: 5, py: 2 }}>
                        <Typography variant='h3'>Live Project</Typography>
                    </Button>
                    <Button variant='outlined' sx={{ px: 5, py: 2, color:"yellow", border:"1px solid yellow" }}>
                        <Typography variant='h3'>Go Back</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectsDetails;
