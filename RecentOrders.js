import React from 'react';

const RecentOrders = () => {
    const orders = [
        { id: 1, customer: 'John Doe', total: '$200', status: 'Pending' },
        { id: 2, customer: 'Jane Smith', total: '$150', status: 'Completed' },
    ];

    return (
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;
