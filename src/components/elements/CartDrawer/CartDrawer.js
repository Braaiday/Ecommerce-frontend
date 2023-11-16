import React from 'react';
import {
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    Divider,
    Button,
    Box,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Input,
    Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { actionRemoveItemFromCart, actionUpdateQuantity } from '../../../reducers/shared/actions/actions';

const CartDrawer = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.reducerCart.products);

    const handleRemoveFromCart = (productId) => {
        dispatch(actionRemoveItemFromCart(productId));
    };

    const handleUpdateQuantity = (productId, newQuantity) => {
        dispatch(actionUpdateQuantity(productId, newQuantity));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handleCheckout = (data) => {
        // Handle checkout logic here
    };

    return (
        <SwipeableDrawer anchor="right" open={isOpen} onClose={onClose} onOpen={() => { }}>
            <Paper sx={{ width: '80vw', maxWidth: '400px', padding: '2rem', height: '100vw' }}>
                <form onSubmit={(data) => handleCheckout(data)}>
                    <List>
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent='space-between'
                            sx={{ mb: 2, display: 'flex' }}
                        >
                            <Typography variant="h6" align="center">
                                Your Cart
                            </Typography>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={onClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        <Divider />
                        {cart.map((product) => (
                            <Card key={product._id} sx={{ mb: 2, width: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    alt={product.productname}
                                    image={product.imgUrl}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {product.productname}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        R{product.price} x {product.quantity}
                                    </Typography>
                                    <Box display="flex" alignItems="center" mt={1}>
                                        <Typography variant="body2" sx={{ mr: 1 }}>
                                            Quantity:
                                        </Typography>
                                        <Input
                                            type="number"
                                            inputProps={{ min: 1 }}
                                            value={product.quantity}
                                            onChange={(e) => handleUpdateQuantity(product._id, parseInt(e.target.value))}
                                            sx={{ width: '3rem' }}
                                        />
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => handleRemoveFromCart(product._id)}
                                            sx={{ marginLeft: 'auto' }} // Position the delete icon to the right
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}

                        {cart.length === 0 && (
                            <ListItem>
                                <ListItemText primary="Your cart is empty" />
                            </ListItem>
                        )}

                        {cart.length > 0 && (
                            <>
                                <Divider />
                                <ListItem>
                                    <Typography variant="h6">Total: R{getTotalPrice()}</Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Button variant="contained" color="primary" fullWidth type="submit">
                                        Checkout
                                    </Button>
                                </ListItem>
                            </>
                        )}
                    </List>
                </form>
            </Paper>
        </SwipeableDrawer>
    );
};

export default CartDrawer;
