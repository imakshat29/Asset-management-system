import {
  FaLaptop,
  FaUsers,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock
} from "react-icons/fa";

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

export default function Dashboard() {
  return (
    <div>

      {/* Welcome + CTA */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "6px" }}>Welcome Back 👋</h2>
          <p style={{ color: "#6b7280" }}>
            Here’s what’s happening with your assets today.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
  <button
    onClick={() => (window.location.href = "/assets")}
    style={{
      background: "white",
      color: "#2563eb",
      padding: "10px 16px",
      borderRadius: "12px",
      border: "1px solid #2563eb",
      fontWeight: 600,
      cursor: "pointer",
    }}
  >
    View Assets
  </button>

  <button
    onClick={() => (window.location.href = "/assign")}
    style={{
      background: "#2563eb",
      color: "white",
      padding: "10px 18px",
      borderRadius: "12px",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 8px 18px rgba(37,99,235,0.3)",
    }}
  >
    + Assign Asset
  </button>

  <button
    onClick={() => (window.location.href = "/reports")}
    style={{
      background: "white",
      color: "#374151",
      padding: "10px 16px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      fontWeight: 600,
      cursor: "pointer",
    }}
  >
    View Reports
  </button>
</div>

      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "18px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <FaLaptop size={28} color="#2563eb" />
          <h4>Total Assets</h4>
          <h2>120</h2>
        </div>


{/* Asset Status Summary */}
<div
  style={{
    display: "flex",
    gap: "18px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background: "white",
      padding: "16px",
      borderRadius: "14px",
      flex: 1,
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    }}
  >
    <h4 style={{ color: "#6b7280", marginBottom: "6px" }}>
      Available Assets
    </h4>
    <h2 style={{ color: "#16a34a" }}>39</h2>
  </div>

  <div
    style={{
      background: "white",
      padding: "16px",
      borderRadius: "14px",
      flex: 1,
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    }}
  >
    <h4 style={{ color: "#6b7280", marginBottom: "6px" }}>
      Assigned Assets
    </h4>
    <h2 style={{ color: "#2563eb" }}>78</h2>
  </div>

  <div
    style={{
      background: "white",
      padding: "16px",
      borderRadius: "14px",
      flex: 1,
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    }}
  >
    <h4 style={{ color: "#6b7280", marginBottom: "6px" }}>
      Lost / Damaged
    </h4>
    <h2 style={{ color: "#dc2626" }}>3</h2>
  </div>
</div>

        <div style={cardStyle}>
          <FaUsers size={28} color="#16a34a" />
          <h4>Total Employees</h4>
          <h2>45</h2>
        </div>

        <div
          style={{
            ...cardStyle,
            background: "#eff6ff",
            border: "2px solid #2563eb",
          }}
        >
          <FaCheckCircle size={28} color="#2563eb" />
          <h4>Assigned Assets</h4>
          <h2>78</h2>
        </div>

        <div style={cardStyle}>
          <FaExclamationTriangle size={28} color="#dc2626" />
          <h4>Lost / Damaged</h4>
          <h2>3</h2>
        </div>
      </div>

      {/* 🔥 Recent Activity */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "14px" }}>
          Recent Activity
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaClock color="#2563eb" />
            <span>
              Laptop assigned to <b>Ankit</b>
            </span>
            <span style={{ marginLeft: "auto", color: "#6b7280" }}>
              2 min ago
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaClock color="#16a34a" />
            <span>
              Monitor returned by <b>Riya</b>
            </span>
            <span style={{ marginLeft: "auto", color: "#6b7280" }}>
              1 hour ago
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaClock color="#dc2626" />
            <span>
              Keyboard marked lost by <b>Amit</b>
            </span>
            <span style={{ marginLeft: "auto", color: "#6b7280" }}>
              Yesterday
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
