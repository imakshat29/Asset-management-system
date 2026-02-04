import { FaFileAlt, FaDownload, FaChartPie } from "react-icons/fa";

export default function Reports() {
  return (
    <div>

      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h2>Reports</h2>
        <p style={{ color: "#6b7280" }}>
          View and export asset usage reports
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <FaFileAlt size={26} color="#2563eb" />
          <h4>Total Reports</h4>
          <h2>12</h2>
        </div>

        <div style={cardStyle}>
          <FaChartPie size={26} color="#16a34a" />
          <h4>This Month</h4>
          <h2>5</h2>
        </div>

        <div style={cardStyle}>
          <FaDownload size={26} color="#dc2626" />
          <h4>Downloads</h4>
          <h2>28</h2>
        </div>
      </div>

      {/* Report Table */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "14px" }}>Recent Reports</h3>

        <table width="100%" cellPadding="10">
          <thead>
            <tr style={{ textAlign: "left", color: "#6b7280" }}>
              <th>Report Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Asset Assignment Report</td>
              <td>Monthly</td>
              <td>Sep 2024</td>
              <td>
                <button className="assign-btn">Download</button>
              </td>
            </tr>

            <tr>
              <td>Returned Assets</td>
              <td>Weekly</td>
              <td>Sep 12, 2024</td>
              <td>
                <button className="assign-btn">Download</button>
              </td>
            </tr>

            <tr>
              <td>Lost Assets</td>
              <td>Quarterly</td>
              <td>Aug 2024</td>
              <td>
                <button className="assign-btn">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};
