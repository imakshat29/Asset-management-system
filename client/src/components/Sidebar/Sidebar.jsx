// Sidebar.jsx (UPDATED: NO TOGGLE BUTTON, PERMANENTLY EXPANDED STYLE)

import React, { useState, useEffect } from 'react';
import './Sidebar.css';

// Import icons
import {
    MdDashboard,
    MdCalendarToday,
    MdMailOutline,
    MdWidgets,
    MdAssignment,
    MdPersonOutline,
    MdEdit,
    MdOutlineArticle,
    MdBarChart,
    MdPeopleOutline,
    MdSettings,
    MdPhotoCamera, 
    MdAccountCircle,
    // MdChevronLeft, <-- Removed unnecessary icons
    // MdChevronRight, <-- Removed unnecessary icons
} from 'react-icons/md';

// Navigation links data (same as before)
const navItems = [
    { name: 'Dashboard', icon: <MdDashboard />, active: true },
    { name: 'Calendar', icon: <MdCalendarToday /> },
    { name: 'Inbox', icon: <MdMailOutline />, badge: 2 },
    { name: 'Widget', icon: <MdWidgets /> },
    { name: 'Tasks', icon: <MdAssignment />, badge: 4 },
    { name: 'Profile', icon: <MdPersonOutline /> },
    { name: 'Write post', icon: <MdEdit /> },
    { name: 'Pages', icon: <MdOutlineArticle /> },
    { name: 'Chart', icon: <MdBarChart /> },
    { name: 'Social App', icon: <MdPeopleOutline /> },
    { name: 'Global Setting', icon: <MdSettings /> },
];

// NOTE: Since the toggle button is removed, we default to the expanded state.
// We ignore the 'isCollapsed' prop for this permanent expanded view.
const Sidebar = ({ isCollapsed, onToggle }) => { 
    
    // Default to NOT collapsed since the button is gone.
    const collapsed = false; 

    // --- User Information ---
    const userName = "Akshat Singh Chawda";
    const userRole = "Admin";
    const projectTitle = "Asset Management";
    const userImageSrc = "path/to/your/avatar/image.jpg"; 
    
    // Fallback Avatar (using initials)
    const renderProfileContent = userImageSrc === "path/to/your/avatar/image.jpg" ? (
        <div className="fallback-avatar-initials">ASC</div>
    ) : (
        <img
            src={userImageSrc}
            alt={userName}
            className="profile-image"
        />
    );

    // Stagger animation for nav items
    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        setNavVisible(true);
    }, []);

    return (
        // The 'collapsed' class will effectively never be applied now.
        <div className={`sidebar`}> 
            {/* 1. Toggle Button at Top - REMOVED AS REQUESTED */}
            {/* <button className="toggle-sidebar-btn" onClick={toggleCollapsed}> ... </button> */}

            {/* 2. User/Project Header - Now simpler and without large top padding */}
            <div className="sidebar-header">
                <div className="profile-section">
                    <div className="profile-image-container">
                        {renderProfileContent}
                        <div className="profile-edit-overlay">
                            <MdPhotoCamera />
                        </div>
                    </div>
                    
                    {/* User Info is always visible */}
                    <div className="user-info"> 
                        <p className="user-name">{userName}</p>
                        <p className="user-role">{userRole}</p>
                        <p className="project-title">{projectTitle}</p>
                    </div>
                </div>
            </div>

            {/* 3. Navigation Links */}
            <nav className={`sidebar-nav ${navVisible ? 'nav-visible' : ''}`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li 
                            key={item.name} 
                            className={`nav-item ${item.active ? 'active' : ''}`}
                            style={{ 
                                animationDelay: `${index * 0.05}s`
                            }}
                        >
                            <a href={`#${item.name.toLowerCase().replace(' ', '-')}`}>
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-text">{item.name}</span>
                                {item.badge && <span className="nav-badge">{item.badge}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 4. Footer Spacer - Now used to properly push content */}
            <div className="sidebar-footer-spacer"></div>
        </div>
    );
};

export default Sidebar;