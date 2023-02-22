import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../reducers/shared/thunks/thunks';

const ListItem = ({product}) => {
debugger
    return (
        <div className='listItem-wrap'>
            <img src={product.imgUrl} alt='' />
            <header>
                <h4>{product.productname}</h4>
                <span>🌟</span>
            </header>
            <footer>
                <p>
                    <b>R{product.price}</b>
                </p>
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
