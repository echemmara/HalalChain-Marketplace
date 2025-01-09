import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-semibold">Products</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {items.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
