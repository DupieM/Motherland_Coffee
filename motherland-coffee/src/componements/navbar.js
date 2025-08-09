import React from "react";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../assets/navbar_logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Motherland Coffee Logo" className="logo-image" />
        </Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/thankyou" className="stickers-link">
          <span className="thank-you-text">Thank You</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;