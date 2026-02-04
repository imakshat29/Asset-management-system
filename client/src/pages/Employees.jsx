import { useState } from "react";
import "./assignAsset.css";

export default function Employees() {

  const [search, setSearch] = useState("");

  const employees = [
    {
      name: "Ankit Sharma",
      department: "Engineering",
      email: "ankit@company.com",
      assets: 2,
      status: "Active",
    },
    {
      name: "Riya Verma",
      department: "HR",
      email: "riya@company.com",
      assets: 1,
      status: "Active",
    },
    {
      name: "Amit Singh",
      department: "Finance",
      email: "amit@company.com",
      assets: 3,
      status: "Active",
    },
    {
      name: "Neha Gupta",
      department: "Marketing",
      email: "neha@company.com",
      assets: 0,
      status: "Active",
    },
  ];

  return (
    <div className="asset-wrapper">

      <div className="header">
        <h2>Employees</h2>
        <p>Manage employees and view their assigned assets.</p>
      </div>

      <div className="card">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h3>Employee List</h3>

          <input
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              width: "240px",
            }}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Assigned Assets</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees
              .filter(e =>
                e.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.department}</td>
                  <td>{e.email}</td>
                  <td>{e.assets}</td>
                  <td>
                    <span className="badge assigned">
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}
