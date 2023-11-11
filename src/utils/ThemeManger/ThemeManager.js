import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { ThemeProvider } from "@mui/material";
import adminDashBoardTheme from '../../style/Themes/adminDashBoardTheme/adminDashBoardTheme';
import storeTheme from '../../style/Themes/storeTheme/storeTheme';

const ThemeManager = (props) => {
    const role = useSelector(state => state?.reducerUser?.user?.role);

    const theme = useMemo(() => {
        switch (role) {
            case role === 'user':
                return storeTheme;
            case role === 'admin':
                return adminDashBoardTheme;
            default: return storeTheme
        }
    }, [role]);

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemeManager;
