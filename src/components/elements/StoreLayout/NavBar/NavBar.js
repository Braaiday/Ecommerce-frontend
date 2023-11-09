import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogOut, actionToggleBackdrop } from '../../../../reducers/shared/actions/actions';
import ElementDisplayproducts from '../../ElementDisplayProducs/ElementDisplayproducts';

function NavBar() {
    const pages = ['shop', 'services', 'about', 'contact'];
    const isLoggedIn = useSelector(state => state?.reducerUser?.user?.token)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.reducerCart.products);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        }, 
    }));

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={`/${page}`}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography
                                            component="h1"
                                            variant="h6"
                                            color="inherit"
                                            noWrap
                                            sx={{ flexGrow: 1 }}
                                            textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page}`}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>

                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, mr: 2 }} onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
                        <Tooltip title="View Cart">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cart.length} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {isLoggedIn
                        ?
                        <Box sx={{ flexGrow: 0 }}>
                            <Button variant='contained' onClick={() => {
                                dispatch(actionToggleBackdrop());
                                dispatch(actionLogOut());
                                navigate('/');
                                dispatch(actionToggleBackdrop());
                            }}>Log Out</Button>
                        </Box>

                        :
                        <Box sx={{ flexGrow: 0 }}>
                            <Button><Link to={'/login'}>Login</Link></Button>
                            <Button><Link to={'/register'}>Register</Link></Button>
                        </Box>
                    }
                </Toolbar>
            </Container>
            <div key="drawer">
                <SwipeableDrawer
                    anchor={'right'}
                    open={drawerIsOpen}
                    onClose={() => setDrawerIsOpen(!drawerIsOpen)}
                    onOpen={() => setDrawerIsOpen(true)}
                >
                    <ElementDisplayproducts products={cart} />
                </SwipeableDrawer>
            </div>
        </AppBar>
    );
}
export default NavBar;
