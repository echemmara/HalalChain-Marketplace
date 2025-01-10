import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/4 bg-gray-800 text-white p-5">
                <h2 className="text-2xl font-bold">Vendor Dashboard</h2>
                <ul>
                    <li className="py-2">Dashboard</li>
                    <li className="py-2">Products</li>
                    <li className="py-2">Orders</li>
                </ul>
            </div>
            <div className="w-full md:w-3/4 p-5">
                <h2 className="text-xl font-semibold mb-4">Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-500 text-white p-4 rounded shadow">
                        Total Sales: $20,000
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded shadow">
                        Products: 50
                    </div>
                    <div className="bg-red-500 text-white p-4 rounded shadow">
                        Pending Orders: 10
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
