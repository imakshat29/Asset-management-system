import React from 'react';
import AnalyticsCard from '../components/Dashboard/AnalyticsCard';
import NotificationsWidget from '../components/Dashboard/NotificationsWidget';
import SearchFilter from '../components/Dashboard/SearchFilter';
import AssetsTable from '../components/Dashboard/AssetsTable';
// Use the correct lowercase 'd'
import '../styles/Dashboard.css'; 

// Example data structure for cards
const statsData = [
  { title: "Total Assets", value: "2,450", change: "+12%" },
  { title: "Active Users", value: "85", change: "+5%" },
  { title: "Pending Requests", value: "12", change: "-2%" },
  { title: "Maintenance", value: "3", change: "0%" },
];


export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* 1. Header and Filters */}
      <SearchFilter />

      {/* 2. Stats Section */}
      <div className="analytics-grid">
        {statsData.map((stat, index) => (
          <div key={stat.title} style={{ animationDelay: `${index * 50}ms` }} className="fade-in">
            <AnalyticsCard 
              title={stat.title} 
              value={stat.value} 
              change={stat.change} 
            />
          </div>
        ))}
      </div>

      {/* 3. Main Content Grid (Table + Notifications) */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left: Recent Assets Table */}
        <div className="fade-in" style={{ animationDelay: '0.5s' }}>
          <AssetsTable />
        </div>

        {/* Right: Notifications Widget */}
        <NotificationsWidget />
        
      </div>
    </div>
  );
}