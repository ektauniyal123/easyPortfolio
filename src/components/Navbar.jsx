import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#b74a7eff",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <a href="#hero" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
      <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
      <a href="#resume" style={{ color: "#fff", textDecoration: "none" }}>Resume</a>
      <a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a>
      <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
    </nav>
  );
}

export default Navbar;

