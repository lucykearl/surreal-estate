import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
