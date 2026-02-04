import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaLaptop,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaMoon
} from "react-icons/fa";
import { useEffect, useState } from "react";
import "./layout.css";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>

      {/* Sidebar */}
      <aside className="sidebar">

        {/* Brand */}
        <div className="sidebar-header">
          <div className="logo-circle">A</div>
          <h2>Asset Manager</h2>
        </div>

        <div className="divider" />

        {/* Menu */}
        <ul className="menu">
          <li><NavLink to="/dashboard"><FaHome /> Dashboard</NavLink></li>
          <li><NavLink to="/assign"><FaLaptop /> Assign Assets</NavLink></li>
          <li><NavLink to="/employees"><FaUsers /> Employees</NavLink></li>
          <li><NavLink to="/reports"><FaChartBar /> Reports</NavLink></li>
          <li><NavLink to="/settings"><FaCog /> Settings</NavLink></li>
        </ul>

        <div className="divider" />

        {/* Dark Mode */}
        <button className="sidebar-btn" onClick={toggleTheme}>
          <FaMoon /> {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Logout */}
        <button className="sidebar-btn logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>

      </aside>

      {/* Main */}
      <main className="content">
        {children}
      </main>

    </div>
  );
}
