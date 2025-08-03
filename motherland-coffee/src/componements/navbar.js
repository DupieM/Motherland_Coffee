import React from "react";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img  alt="Motherland Coffee Logo" className="logo-image" />
        </Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/" className="stickers-link">
          <span className="stickers-text">Stickers</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;