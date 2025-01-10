import React, { useEffect, useState } from 'react';

const OrderTracking = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('/api/orders');
            const data = await response.json();
            setOrders(data.orders);
        };
        fetchOrders();
    }, []);

    return (
        <div className="order-tracking">
            <h2>Your Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <h3>Order #{order.id}</h3>
                        <p>Status: {order.status}</p>
                        <p>Expected Delivery: {order.deliveryDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderTracking;
