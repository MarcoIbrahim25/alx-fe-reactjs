import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#e5e7eb",
        textAlign: "center",
        padding: "14px",
        marginTop: "30px",
        borderTop: "3px solid #2563eb",
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} MyCompany</p>
    </footer>
  );
}
