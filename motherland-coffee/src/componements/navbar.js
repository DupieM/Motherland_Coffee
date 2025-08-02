import React from "react";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Replace text with an image if needed */}
        <span className="logo-text">Motherland Coffee</span>
      </div>
      <div className="navbar-right">
        <span className="stickers-text">Stickers</span>
      </div>
    </nav>
  );
};

export default Navbar;