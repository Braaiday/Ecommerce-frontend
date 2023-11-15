import React from 'react'
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material';

const StoreLayout = () => {
    return (
        <div>
            <NavBar />
            <Box>
                <Outlet />
            </Box>

        </div>
    )
}

export default StoreLayout;
