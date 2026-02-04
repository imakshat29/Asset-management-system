import { useState } from "react";
import "./assignAsset.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Assets() {

  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    type: "",
    serial: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.serial) {
      alert("Please fill required fields");
      return;
    }

    if (editIndex !== null) {
      const copy = [...assets];
      copy[editIndex] = form;
      setAssets(copy);
      setEditIndex(null);
      toast.success("Asset updated successfully");
    } else {
      setAssets([...assets, form]);
      toast.success("Asset added successfully");
    }

    setForm({
      name: "",
      type: "",
      serial: "",
      status: "Available",
    });
  };

  const handleDelete = (index) => {
    if (!window.confirm("Delete this asset?")) return;
    setAssets(assets.filter((_, i) => i !== index));
    toast.error("Asset deleted");
  };

  return (
    <div className="asset-wrapper">

      {/* Header */}
      <div className="header">
        <h2>Assets Inventory</h2>
        <p>Manage and track all company assets in one place.</p>
      </div>

      {/* Add Asset */}
      <div className="card">
        <h3>Add / Edit Asset</h3>

        <div className="form-grid">
          <div className="field">
            <label>Asset Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Laptop / Monitor"
            />
          </div>

          <div className="field">
            <label>Asset Type</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Select type</option>
              <option>Laptop</option>
              <option>Monitor</option>
              <option>Keyboard</option>
              <option>Mouse</option>
              <option>Headphones</option>
            </select>
          </div>

          <div className="field">
            <label>Serial Number *</label>
            <input
              name="serial"
              value={form.serial}
              onChange={handleChange}
              placeholder="Enter serial number"
            />
          </div>

          <div className="field">
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Available</option>
              <option>Assigned</option>
              <option>Lost</option>
            </select>
          </div>
        </div>

        <button className="assign-btn" onClick={handleSave}>
          {editIndex !== null ? "Update Asset" : "Add Asset"}
        </button>
      </div>

      {/* Assets Table */}
      <div className="card">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          <h3>Assets List</h3>

          <input
            placeholder="Search asset..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              width: "240px"
            }}
          />
        </div>

        {assets.length === 0 ? (
          <p style={{ color: "#6b7280" }}>No assets added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Serial</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {assets
                .filter(a =>
                  a.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((a, i) => (
                  <tr key={i}>
                    <td>{a.name}</td>
                    <td>{a.type}</td>
                    <td>{a.serial}</td>
                    <td>
                      <span className={`badge ${a.status.toLowerCase()}`}>
                        {a.status}
                      </span>
                    </td>
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
        )}

      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}
