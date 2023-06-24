import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { login, register } from '../../../reducers/shared/thunks/thunks';
import { actionToggleBackdrop } from '../../../reducers/shared/actions/actions';
import useAuth from '../../../utils/useAuth';
import FormField from '../../elements/CustomInputs/FormField';
import backImage from '../../../style/images/lantech.png';

export default function PageRegister() {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm({});

    const onSubmit = async (data) => {
        dispatch(actionToggleBackdrop());
        let response = await dispatch(register(data));
        let hasError = response?.payload?.response?.data?.error;
        if (!hasError) {
            let loginResponse = await dispatch(login({ username: response.payload.data.username, password: data.password }));
            setAuth(loginResponse.payload.data);
            localStorage.setItem('role', loginResponse.payload.data.role);
            localStorage.setItem('token', loginResponse.payload.data.token);
            navigate('/');
        }
        dispatch(actionToggleBackdrop());
    };

    return (
        <div >
            <Container maxWidth="xs" style={{
            backgroundImage: `url(${backImage})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
        }}>
                <CssBaseline />
                <Box sx={{ height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit((data) => onSubmit(data))} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormField name="firstName" label="First Name" control={control} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormField name="lastName" label="Last Name" control={control} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormField name="username" label="Username" control={control} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormField name="email" label="Email Address" control={control} autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormField name="password" label="Password" control={control} autoComplete="new-password" type="password" />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container >
        </div>
    );
}