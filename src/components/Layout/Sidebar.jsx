import React, { useState } from 'react';
import { LayoutDashboard, Users, Clock, Settings, AlertTriangle, ChevronLeft, Package } from 'lucide-react';

const SidebarItem = ({ icon: Icon, text, active, alert }) => (
  <li
    className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors
      ${active
        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
        : "hover:bg-indigo-50 text-gray-600"
      }
    `}
  >
    <Icon size={20} />
    <span className={`overflow-hidden transition-all duration-300 w-full ml-3 ${active ? "" : "group-hover:w-auto"}`}>
      {text}
    </span>
    {alert && (
      <div
        className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 group-hover:right-2`}
      />
    )}
  </li>
);

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  // Define your navigation items here
  const navItems = [
    { icon: LayoutDashboard, text: "Dashboard", active: true },
    { icon: Users, text: "Users", active: false },
    { icon: Clock, text: "Schedule", active: false, alert: true },
    { icon: Package, text: "Assets", active: false },
    { icon: AlertTriangle, text: "Reports", active: false },
  ];

  return (
    <aside 
      className={`h-screen transition-all duration-300 ${expanded ? "w-64" : "w-16"}`} 
      onMouseEnter={() => setExpanded(true)} 
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className={`overflow-hidden transition-all duration-300 ${expanded ? "w-32" : "w-0"} text-lg font-bold text-indigo-600`}>
            MyApp
          </h1>
          {/* Collapse/Expand button - optional for manual control */}
          <button 
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <ChevronLeft size={20} className={`transition-transform ${expanded ? "" : "rotate-180"}`} />
          </button>
        </div>

        <ul className="flex-1 px-3">
          {navItems.map((item, index) => (
            <SidebarItem key={index} {...item} active={item.active && expanded} />
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Profile"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all duration-300 ${expanded ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Akshay S.</h4>
              <span className="text-xs text-gray-600">akshay@dev.com</span>
            </div>
            <Settings size={20} className="text-gray-500" />
          </div>
        </div>
      </nav>
    </aside>
  );
}