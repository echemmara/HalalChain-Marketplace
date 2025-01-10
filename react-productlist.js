import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const columns = [
        { field: 'name', headerName: 'Product Name', width: 200 },
        { field: 'halalCertified', headerName: 'Halal Certified', width: 150 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={items} columns={columns} pageSize={5} />
        </div>
    );
};

export default ProductList;
