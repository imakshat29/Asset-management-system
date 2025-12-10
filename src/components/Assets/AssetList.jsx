import React, { useEffect, useState } from "react";
import { fetchAssets } from "../../api/assetsApi";
import "./AssetList.css";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPageOptions = [5, 10, 20];

  // Debounce Search
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  // Load Assets (from mock API)
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchAssets(debouncedSearch, statusFilter);
        setAssets(data);
        setError("");
      } catch {
        setError("Failed to load assets");
        setAssets([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [debouncedSearch, statusFilter]);

  const totalItems = assets.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = assets.slice(start, start + itemsPerPage);

  const goTo = (p) => setCurrentPage(p);
  const prev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const next = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  const clearFilters = () => {
    setStatusFilter("");
    setSearch("");
  };

  const renderSkeleton = () =>
    Array.from({ length: 5 }).map((_, i) => (
      <tr key={i}>
        <td>
          <div className="skeleton"></div>
        </td>
        <td>
          <div className="skeleton"></div>
        </td>
        <td>
          <div className="skeleton"></div>
        </td>
        <td>
          <div className="skeleton"></div>
        </td>
        <td>
          <div className="skeleton"></div>
        </td>
      </tr>
    ));

  const renderPageNumbers = () => {
    const pages = [];
    const delta = 2;

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    const buttons = [];

    if (pages[0] > 1) {
      buttons.push(1);
      if (pages[0] > 2) buttons.push("...");
    }

    pages.forEach((p) => buttons.push(p));

    if (pages[pages.length - 1] < totalPages) {
      if (pages[pages.length - 1] < totalPages - 1) buttons.push("...");
      buttons.push(totalPages);
    }

    return buttons.map((p, i) =>
      p === "..." ? (
        <span key={i} className="ellipsis">
          …
        </span>
      ) : (
        <button
          key={i}
          className={`page-btn ${p === currentPage ? "active" : ""}`}
          onClick={() => goTo(p)}
        >
          {p}
        </button>
      )
    );
  };

  return (
    <div className="asset-container">
      <h2 className="asset-title">Assets</h2>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          className="filter-input"
          type="text"
          placeholder="Search by name, category, serial..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Assigned">Assigned</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <select
          className="filter-select"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {itemsPerPageOptions.map((n) => (
            <option key={n} value={n}>
              {n} / page
            </option>
          ))}
        </select>

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>

        <span className="summary">
          {loading ? "Loading..." : `${totalItems} items`} • Page {currentPage}{" "}
          / {totalPages}
        </span>
      </div>

      {/* TABLE */}
      <table className="asset-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Model</th>
            <th>Serial No</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            renderSkeleton()
          ) : error ? (
            <tr>
              <td className="error-message" colSpan="5">
                {error}
              </td>
            </tr>
          ) : paginated.length === 0 ? (
            <tr>
              <td className="empty-message" colSpan="5">
                No Assets Found
              </td>
            </tr>
          ) : (
            paginated.map((a) => (
              <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.category}</td>
                <td>{a.model}</td>
                <td>{a.serialNumber}</td>
                <td>{a.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={prev}
        >
          Prev
        </button>

        {renderPageNumbers()}

        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AssetList;
