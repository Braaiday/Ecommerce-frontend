import { colors, createTheme } from "@mui/material";
import { blue, cyan, green } from "@mui/material/colors";

export default createTheme({
    palette: {
        primary:{
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