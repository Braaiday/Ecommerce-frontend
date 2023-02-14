import { colors, createTheme } from "@mui/material";
import { blue, cyan, green, purple } from "@mui/material/colors";

export default createTheme({
    palette: {
        primary:{
            main: blue[400],
        },
        secondary: {
            main: cyan[900],
        },
        success: {
            main: green[500],
        }
    }
});