import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages – Correct Paths
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
