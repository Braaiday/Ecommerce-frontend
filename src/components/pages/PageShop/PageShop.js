import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../reducers/shared/thunks/thunks';
import ElementDisplayproducts from '../../elements/ElementDisplayProducs/ElementDisplayproducts';

export default function PageShop() {
    const products = useSelector(state => state.reducerProducts.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <div className='PageShop'>
            <div className='home_list-wrap'>
                <ElementDisplayproducts products={products}/>
            </div>
        </div>
    )
}
