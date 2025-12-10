// client/src/components/Dashboard/SearchFilter.jsx
import React from 'react';
import "../../styles/Dashboard.css";

export default function SearchFilter() {
  return (
    <div className="toolbar">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search assets, users..." 
          className="search-input"
        />
      </div>
      
      <div className="filter-box">
        <select className="sort-select">
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
          <option value="status">Sort by: Status</option>
        </select>
      </div>
    </div>
  );
}