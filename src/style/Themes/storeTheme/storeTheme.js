// Import necessary modules
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

// Define the store theme
const storeTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowX: 'hidden', // Hide horizontal overflow
                    backgroundColor: grey[900], // Set background color to a dark shade
                },
                '#root': {
                    height: '100vh', // Set root container to full height of the viewport
                },
            },
        },
    },
});

export default storeTheme;
