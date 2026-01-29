import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function Rota() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
