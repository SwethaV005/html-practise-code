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
import NotFound from "./pages/NotFound";
import "./server";

import { createBrowserRouter, createRoutesFromElements,RouterProvider, Routes, Route, Link, Outlet } from "react-router-dom";
 const route=createBrowserRouter(
  createRoutesFromElements(
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
            <Route path="*" element={<NotFound/>}></Route>
        </Route>
       
  )
 )
function App() {
  return (
   <RouterProvider route={route}/>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
