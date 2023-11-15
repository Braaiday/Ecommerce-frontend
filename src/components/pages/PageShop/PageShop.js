import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../reducers/shared/thunks/thunks';

export default function PageShop() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.reducerProducts.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <div className='PageShop'>
            Products to go here
        </div>
    )
}
