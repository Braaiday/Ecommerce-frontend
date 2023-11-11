import { createTheme } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: cyan[300],
        },
        success: {
            main: green[500],
        }
    }
});

export default theme;