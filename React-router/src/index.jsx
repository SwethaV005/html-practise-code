import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Van from "./pages/Van/Vans";
import Vandetail from "./pages/Van/Vandetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import "./pages/server";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="vans/:id" element={<Vandetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Review />} />
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanInfo/>} />
            <Route path="photos" element={<HostVanPhotos/>} />
            <Route path="pricing" element={<HostVanPricing />} /> 
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
