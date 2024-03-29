import * as React from 'react';
import { styled, useTheme } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, ListItemButton, ListItemIcon } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actionLogOut } from '../../../reducers/shared/actions/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from '../../../components/elements/Link/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const Dashboard = (props) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        setOpen(!isMobile); // Open the drawer by default on larger screens
    }, [isMobile]);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px',
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <Button variant='contained' onClick={() => {
                        dispatch(actionLogOut());
                        navigate('/');
                    }}>Log Out</Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <React.Fragment>
                        <Link to={'/dashboard'}>
                            <ListItemButton selected={location.pathname === '/dashboard' ? true : false}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </Link>
                        <Link to={'/orders'}>
                            <ListItemButton selected={location.pathname === '/orders' ? true : false}>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </Link>
                    </React.Fragment>
                    <Divider sx={{ my: 1 }} />
                    <React.Fragment>
                        <ListSubheader component="div"  >
                            {open && <>Products</>}
                        </ListSubheader>
                        <Link to={"/view"}>
                            <ListItemButton selected={location.pathname === '/view' ? true : false}>
                                <ListItemIcon>
                                    <PageviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItemButton>
                        </Link>
                        <Link to={"/add"}>
                            <ListItemButton selected={location.pathname === '/add' ? true : false}>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItemButton>
                        </Link>
                        <Link to={"/edit"}>
                            <ListItemButton selected={location.pathname === '/edit' ? true : false}>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit" />
                            </ListItemButton>
                        </Link>
                        <Link to={"/test"}>
                            <ListItemButton selected={location.pathname === '/test' ? true : false}>
                                <ListItemText primary="Test" />
                            </ListItemButton>
                        </Link>
                    </React.Fragment>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {props.children}
                </Container>
            </Box>
        </Box>
    );
}

export default Dashboard;
