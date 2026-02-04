import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

// your pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AssignAsset from "./pages/AssignAsset";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/assign"
          element={
            <Layout>
              <AssignAsset />
            </Layout>
          }
        />

        <Route
          path="/employees"
          element={
            <Layout>
              <Employees />
            </Layout>
          }
        />

        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

