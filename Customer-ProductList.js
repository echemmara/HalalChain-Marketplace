import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`/api/products?search=${search}&category=${category}`);
            const data = await response.json();
            setProducts(data.products);
        };
        fetchProducts();
    }, [search, category]);

    return (
        <div className="product-list">
            <h2>Halal Products</h2>
            <div>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="snacks">Snacks</option>
                </select>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
