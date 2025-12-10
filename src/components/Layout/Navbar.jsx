import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

export default function TopBar({ onMenuClick }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo/Title & Menu Toggle (Optional for mobile) */}
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="text-gray-500 hover:text-indigo-600 focus:outline-none md:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-800 ml-4 hidden md:block">
                Dashboard Overview
            </h1>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search assets, users, or reports..."
                type="search"
              />
            </div>
          </div>

          {/* Right Side: Icons & Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400" />
            </button>

            {/* Profile Dropdown (Placeholder) */}
            <div className="ml-3 relative">
              <img
                className="h-8 w-8 rounded-full"
                src="https://ui-avatars.com/api/?background=4f46e5&color=fff&bold=true&name=AS"
                alt="User Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}