import { Paper } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NavBar';

export default function StoreLayout() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}
