import "./SearchFilter.css";

const SearchFilter = () => {
  return (
    <div className="search-filter-box">
      <input
        type="text"
        placeholder="Search assets..."
        className="search-input"
      />

      <select className="sort-dropdown">
        <option>Sort By</option>
        <option>Name</option>
        <option>Status</option>
        <option>Date</option>
      </select>
    </div>
  );
};

export default SearchFilter;
