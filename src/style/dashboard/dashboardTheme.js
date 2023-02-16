import { createTheme } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";

// Here we can set the theme of the app, this could depend on the brand perhaps.
// Here we could make themes for multiple brands and use of a enviroment variable to switch to their theme
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

// Here you can overide the default props for the material ui components
theme.props = {
    MuiButton: {
        
    },
}

// Here you can custom css and add custom css classes
theme.overrides = {
    MuiButton: {
        root: {

        },
        
    }
}

export default theme;