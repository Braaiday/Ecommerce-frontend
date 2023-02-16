import { createTheme } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";

// Here we can set the theme of the app, this could depend on the brand perhaps.
const theme = createTheme({
    palette: {
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

// Here we can overide styles for the material ui components
theme.props = {
    MuiButton: {

    },
}

export default theme;