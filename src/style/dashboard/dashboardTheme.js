import { createTheme } from "@mui/material";
import { blue, cyan, green, red } from "@mui/material/colors";

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
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    icon: {
        margin: theme.spacing.unit * 2
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        "&:hover": {
            color: red[800]
        }
    },
    cardHeader: {
        textalign: "center",
        align: "center",
        backgroundColor: "white"
    },
    input: {
        display: "none"
    },
    title: {
        color: blue[800],
        fontWeight: "bold",
        fontFamily: "Montserrat",
        align: "center"
    },
    button: {
        color: blue[900],
        margin: 10
    },
    secondaryButton: {
        color: "gray",
        margin: 10
    },
    typography: {
        margin: theme.spacing.unit * 2,
        backgroundColor: "default"
    },

    searchRoot: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400
    },
    searchInput: {
        marginLeft: 8,
        flex: 1
    },
    searchIconButton: {
        padding: 10
    },
    searchDivider: {
        width: 1,
        height: 28,
        margin: 4
    }
}

// Here you can custom css and add custom css classes
theme.overrides = {
    MuiButton: {
        root: {

        },

    }
}

export default theme;