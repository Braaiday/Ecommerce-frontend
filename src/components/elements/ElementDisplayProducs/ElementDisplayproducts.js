import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionAddItemToCart } from '../../../reducers/shared/actions/actions';
import { getProducts } from '../../../reducers/shared/thunks/thunks';

export const ListItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='listItem-wrap'>
            <img src={product.imgUrl} alt='' onClick={() => navigate(`/shop/${product._id}`)}/>
            <header>
                <h4>{product.productname}</h4>
                {/* <span></span> */}
            </header>
            <footer>
                <p>
                    <b>R{product.price}</b>
                </p>
                <Button variant='outlined' onClick={() => dispatch(actionAddItemToCart(product))}>Add To Cart</Button>
            </footer>
        </div>
    )
}

export default function ElementDisplayproducts() {
    const products = useSelector(state => state.reducerProducts.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <div className='ElementDisplayproducts'>
            <div className='list-wrap'>
                {products.map((product) => (
                    <ListItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}
