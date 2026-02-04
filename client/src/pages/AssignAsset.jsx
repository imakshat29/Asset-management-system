import { useState } from "react";
import "./assignAsset.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AssignAsset() {

  const [form, setForm] = useState({
    employee: "",
    asset: "",
    assetType: "",
    serial: "",
    date: "",
    status: "Assigned",
    notes: "",
  });

  const [assigned, setAssigned] = useState([]);

  const [search, setSearch] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const stats = {
    total: assigned.length,
    assigned: assigned.filter(a => a.status === "Assigned").length,
    returned: assigned.filter(a => a.status === "Returned").length,
    lost: assigned.filter(a => a.status === "Lost").length,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAssign = () => {

    if (!form.employee || !form.asset || !form.date) {
      alert("Please fill required fields");
      return;
    }

    if (editIndex !== null) {
      const copy = [...assigned];
      copy[editIndex] = form;
      setAssigned(copy);
      setEditIndex(null);
      toast.success("Asset updated successfully!");
    } else {
      setAssigned([...assigned, form]);
      toast.success("Asset assigned successfully!");
    }

    setForm({
      employee: "",
      asset: "",
      assetType: "",
      serial: "",
      date: "",
      status: "Assigned",
      notes: "",
    });
  };

  const handleDelete = (index) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this record?"
  );

  if (!confirmDelete) return;

  setAssigned(assigned.filter((_, i) => i !== index));
  toast.error("Asset deleted");
};

  

  return (
    <div className="asset-wrapper">

      <div className="header">
        <h2>Asset Assignment</h2>
        <p>Assign company assets to employees and track usage easily.</p>
      </div>

      <div className="cards-row">

        <div className="dash-card blue">
          <h4>Total Assets</h4>
          <span>{stats.total}</span>
        </div>

        <div className="dash-card green">
          <h4>Assigned</h4>
          <span>{stats.assigned}</span>
        </div>

        <div className="dash-card yellow">
          <h4>Returned</h4>
          <span>{stats.returned}</span>
        </div>

        <div className="dash-card red">
          <h4>Lost</h4>
          <span>{stats.lost}</span>
        </div>

      </div>

      <div className="card">
        <h3>Assign New Asset</h3>

        <div className="form-grid">

          <div className="field">
            <label>Employee *</label>
            <input
              name="employee"
              value={form.employee}
              onChange={handleChange}
              placeholder="Enter employee name"
            />
          </div>

          <div className="field">
            <label>Asset Name *</label>
            <input
              name="asset"
              value={form.asset}
              onChange={handleChange}
              placeholder="Laptop / Monitor / Keyboard..."
            />
          </div>

          <div className="field">
            <label>Asset Type</label>
            <select name="assetType" value={form.assetType} onChange={handleChange}>
              <option value="">Select type</option>
              <option>Laptop</option>
              <option>Monitor</option>
              <option>Keyboard</option>
              <option>Mouse</option>
              <option>Headphones</option>
            </select>
          </div>

          <div className="field">
            <label>Serial Number</label>
            <input
              name="serial"
              value={form.serial}
              onChange={handleChange}
              placeholder="Enter serial number"
            />
          </div>

          <div className="field">
            <label>Assignment Date *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Assigned</option>
              <option>Returned</option>
              <option>Lost</option>
            </select>
          </div>

          <div className="field notes">
            <label>Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Additional notes"
            />
          </div>

        </div>

        <button className="assign-btn" onClick={handleAssign}>
          Assign Asset
        </button>
      </div>

      <div className="card">

        {/* heading + search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          <h3>Assigned Assets</h3>

          <input
            placeholder="Search asset or employee..."
            style={{
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              width: "260px"
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Asset</th>
              <th>Type</th>
              <th>Serial</th>
              <th>Date</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assigned
              .filter(a =>
                a.employee.toLowerCase().includes(search.toLowerCase()) ||
                a.asset.toLowerCase().includes(search.toLowerCase())
              )
              .map((a, i) => (
                <tr key={i}>
                  <td>{a.employee}</td>
                  <td>{a.asset}</td>
                  <td>{a.assetType}</td>
                  <td>{a.serial}</td>
                  <td>{a.date}</td>

                  <td>
                    <span className={`badge ${a.status.toLowerCase()}`}>
                      {a.status}
                    </span>
                  </td>

                  <td>{a.notes}</td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setForm(a);
                        setEditIndex(i);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>

        </table>
      </div>

      <ToastContainer position="top-right" />

    </div>
  );
}
