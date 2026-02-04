import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // reset old error
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // demo credentials
    if (email === "admin@gmail.com" && password === "12345") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "25px",
          borderRadius: "14px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Welcome Back</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Login to continue to Asset System
        </p>

        {error && (
          <div
            style={{
              background: "#fee2e2",
              padding: "8px",
              borderRadius: "8px",
              marginBottom: "12px",
              color: "#b91c1c",
            }}
          >
            {error}
          </div>
        )}

        <div style={{ marginBottom: "14px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
