import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function PageProduct() {
    const { id } = useLocation();
    const [product, setProduct] = useState({name : "cheese"});

    useEffect(() => {

    }, [])

    return (
        <div>
            PageProduct
            {product.name}
        </div>
    )
}
