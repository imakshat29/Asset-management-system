export default function SortFilter({ onSortChange }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        onChange={(e) => onSortChange && onSortChange(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "200px",
        }}
      >
        <option value="">Sort By</option>
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
        <option value="date-new">Date Added (Newest)</option>
        <option value="date-old">Date Added (Oldest)</option>
        <option value="status-assigned">Status: Assigned</option>
        <option value="status-available">Status: Available</option>
      </select>
    </div>
  );
}
