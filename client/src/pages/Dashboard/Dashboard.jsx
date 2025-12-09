import React from 'react';
// Assuming these components exist in their respective paths
import Navbar from '../../components/Navbar/Nabar'; 
import Sidebar from '../../components/Sidebar/Sidebar';
import AnalyticsCard from '../../components/Cards/AnalyticsCard';
import NotificationWidget from '../../components/Notifications/NotificationWidget';
import './Dashboard.css';
import AssetTable from '../../components/Tables/AssetTable'; // Assuming AssetTable exists
import BarChart from '../../components/Charts/BarChart';     // Assuming BarChart exists
import PieChart from '../../components/Charts/PieChart';     // Assuming PieChart exists

import { FiTool, FiUsers, FiCalendar, FiSearch, FiSliders } from 'react-icons/fi';

const Dashboard = () => {
    // --- Define the four distinct colors ---
    const cardColors = {
        blue: "#007bff", // Primary Blue for Total
        green: "#28a745", // Success Green for Assigned
        orange: "#fd7e14", // Orange/Warning for Maintenance
        red: "#dc3545",  // Danger Red for Upcoming Returns
    };
    
    // Mock filter states
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortBy, setSortBy] = React.useState('last_updated');

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content-area">
                {/* Navbar (and placing the Notification Widget inside for layout context) */}
                <Navbar>
                    <NotificationWidget /> 
                </Navbar> 

                <main className="dashboard-main">
                    <h1 className="dashboard-title">Asset Overview Dashboard</h1>
                    
                    {/* Analytics Cards - NOW PASSING DISTINCT COLORS */}
                    <section className="analytics-card-grid">
                        <AnalyticsCard 
                            title="Total Assets" 
                            value="542" 
                            icon={FiTool} 
                            color={cardColors.blue} // BLUE
                        />
                        <AnalyticsCard 
                            title="Assigned Assets" 
                            value="315" 
                            icon={FiUsers} 
                            color={cardColors.green} // GREEN
                        />
                        <AnalyticsCard 
                            title="Awaiting Maintenance" 
                            value="12" 
                            icon={FiTool} 
                            color={cardColors.orange} // ORANGE
                        />
                        <AnalyticsCard 
                            title="Upcoming Returns" 
                            value="8" 
                            icon={FiCalendar} 
                            color={cardColors.red} // RED
                        />
                    </section>
                    
                    {/* Search/Sort Filters & Actions */}
                    <section className="filter-bar">
                        <div className="search-input-container">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search assets by name, ID, or user..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                        </div>
                        
                        <div className="sort-select-group">
                            <label htmlFor="sort-by" className="sort-label">
                                <FiSliders /> Sort By:
                            </label>
                            <select
                                id="sort-by"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="sort-select"
                            >
                                <option value="last_updated">Last Updated</option>
                                <option value="asset_name">Asset Name (A-Z)</option>
                                <option value="status">Status</option>
                                <option value="return_date">Return Date</option>
                            </select>
                        </div>

                        <button className="add-asset-button">
                            + Add New Asset
                        </button>
                    </section>

                    {/* Main Content Area (Charts and Tables) */}
                    <div className="main-chart-and-table-area">
                        <div className="recent-activity-section">
                            <h2 className="section-title">Recent Asset Activity</h2>
                            {/* <AssetTable /> */}
                            <p>Placeholder for Asset Table.</p>
                        </div>
                        <div className="summary-charts-section">
                            <div className="chart-container">
                                <h2 className="section-title">Asset Type Distribution</h2>
                                {/* <PieChart /> */}
                                <p>Placeholder for Pie Chart.</p>
                            </div>
                            <div className="chart-container">
                                <h2 className="section-title">Assignment Trend</h2>
                                {/* <BarChart /> */}
                                <p>Placeholder for Bar Chart.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;