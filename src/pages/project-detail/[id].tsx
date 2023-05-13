import Header from '@app/component/header';
import { findProjectById } from '@app/helper/utils';
import { getProfile } from '@app/store/store';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProjectsDetails = () => {
  const profile = getProfile();
  const router = useRouter();

  const {
    query: { id },
  } = useRouter();
  const [selectedProject, setSelectedProject] = useState<any>();
  useEffect(() => {
    if (id) {
      setSelectedProject(
        findProjectById(id as number | string, profile?.projects?.projects)
      );
    }
  }, [id]);

  console.log(profile?.projects?.projects);

  console.log(selectedProject);
  return (
    <Box sx={{ height: '100%' }}>
      <Header />
      <Box sx={{ width: '100%', mt: '70px', background: '#3C4043' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            component={'img'}
            src={'/project_img1.jpg'}
            alt='project-image'
            sx={{ height: '50%', width: '50%' }}
          />
        </Box>

        <Box sx={{ height: 'inherit', mx: 25 }}>
          <Typography
            variant='h1'
            textAlign={'center'}
            sx={{ textTransform: 'uppercase' }}>
            Project Overview
          </Typography>
          <Divider
            sx={{
              height: '0.2rem',
              mx: { xs: 5, md: 25 },
              background: 'black',
              my: 2,
            }}
          />
          <Typography
            variant='h5'
            dangerouslySetInnerHTML={{
              __html: selectedProject?.description.replace(
                /\./g,
                '.<br /> <br />'
              ),
            }}
          />
        </Box>
        <Box sx={{ mx: 25 }}>
          <Typography
            variant='h1'
            textAlign={'center'}
            sx={{ textTransform: 'uppercase' }}>
            Tech Stacks
          </Typography>
          <Divider
            sx={{
              height: '0.2rem',
              mx: { xs: 5, md: 25 },
              background: 'black',
              my: 2,
            }}
          />
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
            gap: 5,
          }}>
          <Button variant='contained' sx={{ px: 5, py: 2 }}>
            <Typography variant='h3'>Live Project</Typography>
          </Button>
          <Button
            variant='outlined'
            onClick={() => router.back()}
            sx={{ px: 5, py: 2, color: 'yellow', border: '1px solid yellow' }}>
            <Typography variant='h3'>Go Back</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsDetails;
