import React from 'react';
import { Package, User, Clock, CheckCircle } from 'lucide-react';
import "../../styles/Dashboard.css";

const notificationsData = [
  { id: 1, message: "New asset added (Laptop Model X)", time: "2 mins ago", type: "success" },
  { id: 2, message: "Asset allocated to Sarah Jenkins", time: "1 hour ago", type: "info" },
  { id: 3, message: "Server B maintenance overdue", time: "3 hours ago", type: "warning" },
  { id: 4, message: "3 Assets available for allocation", time: "1 day ago", type: "info" },
];

export default function NotificationsWidget() {
  return (
    <div className="card notification-widget fade-in" style={{ animationDelay: '0.4s' }}>
      <h3>Recent Activity</h3>
      <ul className="notification-list">
        {notificationsData.map((notif) => {
          let IconComponent;
          let iconStyles = {};
          
          if (notif.type === 'success') {
            IconComponent = CheckCircle;
            iconStyles = { color: '#10B981', background: '#D1FAE5' };
          } else if (notif.type === 'info') {
            IconComponent = User;
            iconStyles = { color: '#4F46E5', background: '#EEF2FF' };
          } else {
            IconComponent = Clock;
            iconStyles = { color: '#F59E0B', background: '#FEF3C7' };
          }

          return (
            <li key={notif.id} className="notification-item">
              <div className="notif-icon-box" style={iconStyles}>
                <IconComponent size={18} />
              </div>
              <div className="notif-content">
                <p>{notif.message}</p>
                <span className="notif-time">{notif.time}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}