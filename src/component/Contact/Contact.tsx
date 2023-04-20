import React,{useState} from 'react';
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
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const {name, email, message} = formData;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [name]: value });
      };

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
                        <form onSubmit={handleSubmit}>
                        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
                            <Box>
                                <Typography variant='h5' sx={{ color: 'white', py: 0.5 }}>
                                    NAME
                                </Typography>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    name="name"
                                    value={name}
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
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box>
                                <Typography variant='h5' sx={{ color: 'white', py: 0.5 }}>
                                    EMAIL
                                </Typography>
                                <TextField
                                    fullWidth
                                    autoComplete='off'
                                    name="email"
                                    value={email}
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
                                    onChange={handleChange}
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
                                    name="message"
                                    value={message}
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
                                    onChange={handleChange}
                                />
                            </Box>

                            <Box sx={{ width: '100%', display: 'flex', my: 2, justifyContent: 'flex-end' }}>
                                <Button
                                    variant='contained'
                                    sx={{ px: 5, py: 2 }}
                                    type='submit'
                                >
                                    <Typography variant='h3'>SUBMIT</Typography>
                                </Button>
                            </Box>
                        </Container>
                        </form>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
