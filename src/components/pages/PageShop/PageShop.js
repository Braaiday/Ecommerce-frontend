import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../reducers/shared/thunks/thunks';
import { Grid, Container } from '@mui/material';
import ProductCard from '../../elements/ProductCard/ProductCard';
import { actionAddItemToCart } from '../../../reducers/shared/actions/actions';

export default function PageShop() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.reducerProducts.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <Container sx={{margin: '10px'}}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        onAddToCart={(productToAdd) => dispatch(actionAddItemToCart(productToAdd))}
                    />
                ))}
            </Grid>
        </Container>
    )
}
