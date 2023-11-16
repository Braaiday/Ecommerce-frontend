import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    alt={product.productname}
                    height="140"
                    image={product.imgUrl}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                        {product.productname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        ${product.price}
                    </Typography>
                </CardContent>
                <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </Button>
            </Card>
        </Grid>
    );
};

export default ProductCard