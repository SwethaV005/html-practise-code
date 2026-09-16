import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activestyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activestyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="review"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
