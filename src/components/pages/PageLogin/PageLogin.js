import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from "react-hook-form";
import useAuth from "../../../utils/Auth/useAuth";
import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../reducers/shared/thunks/thunks";
import FormField from "../../elements/CustomInputs/FormField";
import { Link } from "../../elements/Link/Link";

const PageLogin = () => {
    const { setAuth } = useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { handleSubmit, control } = useForm({
    });

    const onSubmit = async (data) => {
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
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Avatar >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit((data) => onSubmit(data))} sx={{ mt: 1 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormField fullWidth name="username" label="Username" control={control} autoComplete="username" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormField fullWidth name="password" label="Password" control={control} autoComplete="current-password" type="password" />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Sign In
                </Button>
                <Grid container>
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

export default PageLogin;