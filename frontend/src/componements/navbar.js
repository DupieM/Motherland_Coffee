import React from "react";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../assets/navbar_logo.png'
import { useTranslation } from 'react-i18next';

const Navbar = () => {

 const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Motherland Coffee Logo" className="logo-image" />
        </Link>
      </div>

      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="af">Afrikaans</option>
        <option value="zu">Zulu</option>
        <option value="xh">Xhosa</option>
      </select>
      
      {/* <div className="navbar-right">
        <Link to="/thankyou" className="stickers-link">
          <span className="thank-you-text">Thank You</span>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;