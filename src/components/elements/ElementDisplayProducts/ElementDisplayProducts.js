import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionAddItemToCart } from '../../../reducers/shared/actions/actions';

export const ListItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='listItem-wrap'>
            <img src={product.imgUrl} alt='' onClick={() => navigate(`/shop/${product._id}`)} />
            <header>
                <h4>{product.productname}</h4>
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

const ElementDisplayProducts = ({ products }) => {

    return (
        <div className='ElementDisplayProducts'>
            <div className='list-wrap'>
                {products.map((product) => (
                    <ListItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ElementDisplayProducts;
