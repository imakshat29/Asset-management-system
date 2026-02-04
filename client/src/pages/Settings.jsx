import { useState } from "react";
import "./assignAsset.css";

export default function Settings() {

  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
  });

  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <div className="asset-wrapper">

      {/* Header */}
      <div className="header">
        <h2>Settings</h2>
        <p>Manage your profile and application preferences.</p>
      </div>

      {/* Profile Settings */}
      <div className="card">
        <h3>Profile Settings</h3>

        <div className="form-grid">
          <div className="field">
            <label>Name</label>
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="card">
        <h3>Preferences</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            Enable Notifications
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />
            Email Alerts
          </label>
        </div>
      </div>

      {/* Theme Info */}
      <div className="card">
        <h3>Theme</h3>
        <p style={{ color: "#6b7280" }}>
          You can switch between Light and Dark mode using the toggle
          in the sidebar.
        </p>
      </div>

    </div>
  );
}
