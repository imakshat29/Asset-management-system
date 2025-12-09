// src/components/Cards/AnalyticsCard.jsx

import React from 'react';
import './AnalyticsCard.css';

const AnalyticsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div
      className="analytics-card"
      style={{
        backgroundColor: `${color}15`, 
        border: `1px solid ${color}30`
      }}
    >
      {/* Header */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>

        <div 
          className="card-icon-container" 
          style={{ backgroundColor: `${color}25` }}
        >
          <Icon className="card-icon" style={{ color }} />
        </div>
      </div>

      {/* Value */}
      <div className="card-value-section">
        <span className="card-value">{value}</span>

        <span className="card-trend" style={{ color }}>
          {title === "Total Assets" ? "+2.5%" : "+0.1%"}
        </span>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <p className="footer-detail">View detailed report</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
