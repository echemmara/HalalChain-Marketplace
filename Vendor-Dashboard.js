import React from 'react';
import StatsCard from './StatsCard';
import RecentOrders from './RecentOrders';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="stats">
                    <StatsCard title="Total Sales" value="$20,000" />
                    <StatsCard title="Products" value="50" />
                    <StatsCard title="Pending Orders" value="10" />
                </div>
                <RecentOrders />
            </div>
        </div>
    );
};

export default Dashboard;
