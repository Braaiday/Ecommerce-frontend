import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import dashboardTheme from '../../style/dashboard/dashboardTheme';
import storeTheme from '../../style/store/storeTheme';
import { ThemeProvider } from "@mui/material";

export default function ThemeManager(props) {
    const role = useSelector(state => state?.reducerUser?.user?.role);

    const theme = useMemo(() => {
        if (role === "user") return storeTheme;
        if (role === "admin") return dashboardTheme;
        if (!role) return storeTheme;
    }, [role]);

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
