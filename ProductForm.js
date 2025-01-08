import React, { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        halalCertified: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct({ ...product, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send data to backend
        await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        alert('Product added successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Product Name:
                <input type="text" name="name" value={product.name} onChange={handleChange} />
            </label>
            <label>
                Halal Certified:
                <input
                    type="checkbox"
                    name="halalCertified"
                    checked={product.halalCertified}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
