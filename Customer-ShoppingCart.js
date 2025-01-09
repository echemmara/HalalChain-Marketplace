import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Halal Chicken', quantity: 1, price: 20 },
        { id: 2, name: 'Organic Dates', quantity: 2, price: 15 },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + delta } : item
            )
        );
    };

    const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className="shopping-cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>
                            Quantity: 
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            {item.quantity}
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </p>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
