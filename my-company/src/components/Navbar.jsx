import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#fff" : "#e6eefc",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  backgroundColor: isActive ? "#1e3a8a" : "transparent",
});

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        color: "#fff",
        padding: "12px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: 700, letterSpacing: 0.3 }}>MyCompany</div>
        <div style={{ display: "flex", gap: 8 }}>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/services" style={linkStyle}>
            Services
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
