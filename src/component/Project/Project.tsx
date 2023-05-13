/* eslint-disable react/no-unescaped-entities */
import { getProfile } from '@app/store/store';
import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
// import Image from 'next/image';

const Project = [
  {
    id: 1,
    companyName: 'valuebound',
    client: 'EnsuredIT',
    projName: 'Ice - 2.0',
    startDate: 'jan 2015',
    endDate: 'jan 2023',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'SASS',
      'GIT',
      'Github',
      'Responsive Design',
      'SEO',
    ],
    description:
      'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
    keyPoint: ['key', 'responsibilty', 'gello'],
    image:
      'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png',
  },
  {
    id: 2,
    companyName: 'valuebound',
    client: 'EnsuredIT',
    projName: 'Ice - 2.0',
    startDate: 'jan 2015',
    endDate: 'jan 2023',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'SASS',
      'GIT',
      'Github',
      'Responsive Design',
      'SEO',
    ],
    description:
      'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
    keyPoint: ['key', 'responsibilty', 'gello'],
    image:
      'https://www.bhphotovideo.com/images/images2500x2500/apple_z0ub_mptr31_bh_macbook_pro_i7_3_1ghz_1343167.jpg',
  },
  {
    id: 3,
    companyName: 'valuebound',
    client: 'EnsuredIT',
    projName: 'Ice - 2.0',
    startDate: 'jan 2015',
    endDate: 'jan 2023',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'SASS',
      'GIT',
      'Github',
      'Responsive Design',
      'SEO',
    ],
    description:
      'Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally',
    keyPoint: ['key', 'responsibilty', 'gello'],
    image:
      'https://www.bhphotovideo.com/images/images2500x2500/apple_z0ub_mptr31_bh_macbook_pro_i7_3_1ghz_1343167.jpg',
  },
];

const Projects = () => {
  const profile = getProfile();

  const router = useRouter();
  return (
    <Box sx={{ height: 'inherit', mx: 25 }}>
      <Box sx={{ width: '100%' }}>
        <Typography
          variant='h1'
          textAlign={'center'}
          sx={{ textTransform: 'uppercase' }}>
          PRoJeCTs
        </Typography>
        <Divider
          sx={{
            height: '0.2rem',
            mx: { xs: 5, md: 25 },
            background: '#3C4043',
          }}
        />
        <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h3' textAlign={'center'} sx={{ width: '70rem' }}>
            {profile?.projects?.projectHeader}
          </Typography>
        </Box>
      </Box>

      <Box>
        {profile?.projects?.projects.map((elem: any, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                columnGap: 5,
                my: 8,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
              }}>
              <Box
                sx={{
                  width: '50%',
                  position: 'relative',
                  // width: '300px',
                  // height: '300px',
                  overflow: 'hidden',
                }}>
                <Image
                  src={elem.mainImage}
                  alt='hello'
                  width={100}
                  height={60}
                  layout='responsive'
                  style={{
                    borderRadius: '15px',
                    filter: 'blur(0)',
                    opacity: '1',
                    transform: `perspective(800px) rotateY(${
                      index % 2 === 0 ? '25deg' : '-25deg'
                    }) scale(.8) rotateX(10deg)`,
                    transition: 'all .6s ease',
                    width: '700px',
                    // '::hover': {
                    //   transform: 'rotate(3deg)',
                    // },
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${
                      index % 2 === 0 ? '-20deg' : '20deg'
                    }) translateY(0px) rotateX(15deg) scale(0.9)`;
                    e.currentTarget.style.filter = 'blur(.5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = `perspective(800px) rotateY(${
                      index % 2 === 0 ? '25deg' : '-25deg'
                    }) scale(.8) rotateX(10deg)`;
                    e.currentTarget.style.filter = 'blur(0px)';
                  }}
                />
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography
                  variant='h2'
                  sx={{ textAlign: 'center', textTransform: 'capitalize' }}>
                  {elem.company}
                </Typography>
                <Divider
                  sx={{
                    height: '0.2rem',
                    mx: { xs: 5, md: 20 },
                    my: 1,
                    background: '#3C4043',
                  }}
                />
                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography component={'small'} sx={{ color: 'white' }}>
                    {elem.client}
                  </Typography>
                  <Box sx={{ display: 'flex', columnGap: 1 }}>
                    <Typography component={'small'} sx={{ color: 'white' }}>
                      {elem.startDate}
                    </Typography>{' '}
                    -
                    <Typography component={'small'} sx={{ color: 'white' }}>
                      {elem.endDate}
                    </Typography>
                  </Box>
                </Box> */}
                <Typography variant='h5'>{elem.projectInfo}</Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    my: 4,
                    justifyContent: 'center',
                  }}>
                  <Button
                    variant='contained'
                    sx={{ px: 5, py: 2 }}
                    onClick={() => router.push(`/project-detail/${elem.pId}`)}>
                    <Typography variant='h3'>View Details</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
