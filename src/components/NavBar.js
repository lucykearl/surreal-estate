import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/view-properties">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
