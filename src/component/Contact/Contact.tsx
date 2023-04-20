import React from 'react';
import { Box, Typography, Divider, Card, Container, TextField, Button } from '@mui/material';

const styles = {
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'yellow',
        },
    },
};

const Contact = () => {
    return (
        <Box sx={{ height: 'inherit', mx: 25 }}>
            <Box>
                <Typography variant='h1' textAlign={'center'} sx={{ textTransform: 'uppercase' }}>
                    CONTACT
                </Typography>
                <Divider sx={{ height: '0.2rem', mx: { xs: 5, md: 25 }, background: 'black' }} />
                <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h3' textAlign={'center'} sx={{ width: '70rem' }}>
                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                    </Typography>
                </Box>
                <Box>
                    <Card sx={{ background: 'black', p: 2 }}>
                        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
                            <Box>
                                <Typography variant='h5' sx={{ color: 'white', py: 0.5 }}>
                                    NAME
                                </Typography>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    type='text'
                                    sx={{ ...styles }}
                                    inputProps={{
                                        form: {
                                            autocomplete: 'off',
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography variant='h5' sx={{ color: 'white', py: 0.5 }}>
                                    EMAIL
                                </Typography>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    type='text'
                                    sx={{ ...styles }}
                                    inputProps={{
                                        form: {
                                            autocomplete: 'off',
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography variant='h5' sx={{ color: 'white', py: 0.5 }}>
                                    MESSAGE
                                </Typography>
                                <TextField
                                    sx={{ ...styles }}
                                    multiline
                                    fullWidth
                                    rows={10}
                                    autoComplete='off'
                                    type='text'
                                    inputProps={{
                                        form: {
                                            autocomplete: 'off',
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            height: 'auto',
                                            color: 'white',
                                        },
                                    }}
                                />
                            </Box>

                            <Box sx={{ width: '100%', display: 'flex', my: 2, justifyContent: 'flex-end' }}>
                                <Button variant='contained' sx={{ px: 5, py: 2 }}>
                                    <Typography variant='h3'>SUBMIT</Typography>
                                </Button>
                            </Box>
                        </Container>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
