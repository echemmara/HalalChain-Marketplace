import React from 'react';

const OrderList = () => {
    const orders = [
        { id: 1, product: 'Halal Chicken', status: 'Shipped' },
        { id: 2, product: 'Organic Dates', status: 'Delivered' },
    ];

    return (
        <div className="order-list">
            <h2>Order Tracking</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.product} - {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
