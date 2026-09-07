import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import HospitalityProduct from "./pages/HospitalityProduct";
import WorkforceProduct from "./pages/WorkforceProduct";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/hospitality-management" element={<HospitalityProduct />} />
          <Route path="/products/workforce-management" element={<WorkforceProduct />} />
          <Route path="/products/hotel-pms" element={<Navigate to="/products/hospitality-management" replace />} />
          <Route path="/products/hris" element={<Navigate to="/products/workforce-management" replace />} />
          <Route path="/products/attendance-payroll" element={<Navigate to="/products/workforce-management" replace />} />
          <Route path="/products/bookify" element={<Navigate to="/products" replace />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
