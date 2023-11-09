import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../reducers/shared/thunks/thunks';
import { ListItem } from '../../elements/ElementDisplayProducs/ElementDisplayproducts';

export default function PageProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        const product = await dispatch(getProduct(id));
        setProduct(product.data[0]);
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <div>
            <ListItem key={product._id} product={product}/>
            {product.productname}
        </div>
    )
}
