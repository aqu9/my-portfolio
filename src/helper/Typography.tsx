import Typography from '@mui/material/Typography';

const CustomTypography = (props: any) => {
    console.log(props)
  return (
    <Typography
    variant='h6'
    noWrap
    component='a'
    href='/'
      sx={{
        ...props.style,
        '&: hover': {
          color: props.hoverColor,
        },
      }}>
      {props.children}
    </Typography>
  );
};

export default CustomTypography;
