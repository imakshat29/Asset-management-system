import React from 'react';
import Sidebar from './Sidebar';
// 👇 Change this line to import your existing Navbar component
import Navbar from './Navbar'; // Assuming your file is named Navbar.jsx

export default function Layout({ children }) {
  // ... (rest of the handleMenuClick logic)
  
  return (
    <div className="flex h-screen bg-gray-100">
      
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* 👇 Use your Navbar component here */}
        <Navbar onMenuClick={handleMenuClick} /> 
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}