import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import dashboardTheme from '../../style/Themes/dashboard/adminDashBoardTheme';
import storeTheme from '../../style/Themes/store/storeTheme';
import { ThemeProvider } from "@mui/material";

export default function ThemeManager(props) {
    const role = useSelector(state => state?.reducerUser?.user?.role);

    const theme = useMemo(() => {
        switch (role) {
            case role === 'user':
                return storeTheme;
            case role === 'admin':
                return dashboardTheme;
            default: return storeTheme
        }
    }, [role]);

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
