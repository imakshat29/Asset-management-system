import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import "../../styles/Dashboard.css";
import { Box, Users, Clock, AlertTriangle } from 'lucide-react';

// MOCK ICON MAPPING
const iconMap = {
  "Total Assets": { icon: "Box", color: "text-blue-600", bg: "bg-blue-100" },
  "Active Users": { icon: "Users", color: "text-indigo-600", bg: "bg-indigo-100" },
  "Pending Requests": { icon: "Clock", color: "text-amber-600", bg: "bg-amber-100" },
  "Maintenance": { icon: "AlertTriangle", color: "text-rose-600", bg: "bg-rose-100" },
};

// Function to dynamically load icons (replace with actual imports if needed)
const Icon = ({ name, size = 20, className }) => {
    switch (name) {
        case 'Box': return <Box size={size} className={className} />;
        case 'Users': return <Users size={size} className={className} />;
        case 'Clock': return <Clock size={size} className={className} />;
        case 'AlertTriangle': return <AlertTriangle size={size} className={className} />;
        default: return <Box size={size} className={className} />;
    }
};

export default function AnalyticsCard({ title, value, change }) {
  const meta = iconMap[title] || { icon: 'Box', color: 'text-slate-600', bg: 'bg-slate-100' };
  const TrendIcon = change.includes('+') ? TrendingUp : TrendingDown;
  const trendColor = change.includes('+') ? 'text-green-600' : 'text-red-600';
  const trendBg = change.includes('+') ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className="card stat-card fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${meta.bg} ${meta.color}`}>
          <Icon name={meta.icon} size={20} />
        </div>
        <div className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${trendBg} ${trendColor}`}>
          <TrendIcon size={12} />
          {change}
        </div>
      </div>
      
      <h4>{title}</h4>
      <div className="value">{value}</div>
    </div>
  );
}