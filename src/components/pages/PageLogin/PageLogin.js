import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Slider, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, Controller } from "react-hook-form";
import useAuth from "../../../utils/useAuth";
import * as React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../reducers/shared/thunks/thunks";
import { actionToggleBackdrop } from "../../../reducers/shared/actions/actions";


export default function PageLogin() {
    const { setAuth } = useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { handleSubmit, control } = useForm({
    });

    const onSubmit = async (data) => {
        dispatch(actionToggleBackdrop());
        let response = await dispatch(login(data));
        let hasError = response?.payload?.response?.data?.error;
        if (!hasError) {
            setAuth(response.payload.data);
            localStorage.setItem('role', response.payload.data.role);
            localStorage.setItem('token', response.payload.data.token);
            navigate(from, { replace: true });
            if (response.payload.data.role === 'admin') navigate("/dashboard");
        } else {
            window.alert(hasError);
        }
        dispatch(actionToggleBackdrop());
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit((data) => onSubmit(data))} sx={{ mt: 1 }}>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) =>
                        <TextField
                            autoComplete="username"
                            argin="normal"
                            fullWidth
                            required
                            id="username"
                            label="Username"
                            autoFocus
                            {...field}
                        />}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) =>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...field}
                        />}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    {/* <Grid item xs>
                        <Link variant="body2">
                            Forgot password?
                        </Link>
                    </Grid> */}
                    <Grid item>
                        <Link to="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );


}