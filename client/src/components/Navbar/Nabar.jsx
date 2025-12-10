// src/components/Navbar/Navbar.jsx

import React from 'react';
import './Navbar.css';
import { FiMenu, FiSettings } from 'react-icons/fi';

// Helper function to generate initials from user name
const getInitials = (name) => {
    if (!name) return '?';
    const names = name.trim().split(' ');
    const initials = names[0]?.[0] || '';
    const secondInitial = names[1]?.[0] || '';
    return (initials + secondInitial).toUpperCase();
};

const Navbar = ({ 
    children, 
    onToggleSidebar, 
    user = { 
        name: 'Akshat Singh Chawda', 
        role: 'Admin'
    } 
}) => {
    const { name, role } = user;
    const initials = getInitials(name);

    return (
        <header className="navbar">
            {/* LEFT SECTION */}
            <div className="navbar-left">
                <button 
                    className="sidebar-toggle-btn" 
                    onClick={onToggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    <FiMenu />
                </button>
                <h2 className="navbar-title">Asset Management Dashboard</h2>
            </div>
            
            
            {/* RIGHT SECTION */}
            <div className="navbar-right">
                
                {/* Notification Area */}
                <div className="notification-area">
                    <div className="notification-icon-wrapper">
                        {children}
                    </div>
                </div>

                <div className="navbar-separator"></div>

                {/* User Profile Area */}
                <div className="user-profile-widget">
                    <div className="user-info-display">
                        
                        {/* Avatar */}
                        <div className="user-avatar-placeholder">
                            <span className="user-initials">{initials}</span>
                        </div>
                        
                        {/* User Details */}
                        <div className="user-details">
                            <span className="user-name">{name}</span>
                            {role && <span className="user-role">{role}</span>}
                        </div>
                    </div>

                    {/* Settings Button */}
                    <a href="#settings" className="settings-btn" aria-label="Settings">
                        <FiSettings />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
