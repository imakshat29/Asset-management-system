import React, { useState } from 'react';
import { IoNotificationsOutline, IoCloseOutline } from 'react-icons/io5';
import './NotificationWidget.css';

// Mock Notification Data
const mockNotifications = [
  { id: 1, message: 'New asset "Laptop X" added.', time: '2 min ago' },
  { id: 2, message: 'Assignment due for User Y today.', time: '1 hour ago' },
  { id: 3, message: 'Inventory low on monitors.', time: '1 day ago' },
];

const NotificationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = mockNotifications.length;

  return (
    <div className="notification-container">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="notification-button"
        aria-label="Notifications"
      >
        <IoNotificationsOutline />
        {unreadCount > 0 && (
          <span className="unread-badge">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="notification-panel">
          <div className="panel-header">
            <h3 className="panel-title">Notifications ({unreadCount})</h3>
            <button onClick={() => setIsOpen(false)} className="close-button">
              <IoCloseOutline />
            </button>
          </div>
          <ul className="notification-list">
            {mockNotifications.map((notification) => (
              <li key={notification.id} className="notification-item">
                <p className="notification-message">{notification.message}</p>
                <p className="notification-time">{notification.time}</p>
              </li>
            ))}
          </ul>
          <div className="panel-footer">
            <a href="/notifications" className="view-all-link">
              View All
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationWidget;