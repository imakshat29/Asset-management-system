import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import AssetList from "./pages/Assets/AssetList";
import AddAsset from "./pages/Assets/AddAsset";
import EditAsset from "./pages/Assets/EditAsset";
import AssignAsset from "./pages/Assignments/AssignaSSET.JSX";
import ReturnAsset from "./pages/Assignments/ReturnAsset";
import AssignmentHistory from "./pages/Assignments/AssignmentHistory";
import ReportsDashboard from "./pages/Reports/ReportsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/assets" element={<AssetList />} />
        <Route path="/assets/add" element={<AddAsset />} />
        <Route path="/assets/edit/:id" element={<EditAsset />} />

        <Route path="/assign" element={<AssignAsset />} />
        <Route path="/return" element={<ReturnAsset />} />
        <Route path="/history" element={<AssignmentHistory />} />

        <Route path="/reports" element={<ReportsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;