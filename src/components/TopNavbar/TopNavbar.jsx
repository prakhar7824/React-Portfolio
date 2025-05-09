import React from "react";
import "./TopNavbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="logo">Prakhar Pandey</div>
      
      <div className="nav-links">
        <ThemeToggle />
        <a 
          href="/personal/resumePrakhar-new.pdf" 
          download 
          className="download-cv-btn"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
