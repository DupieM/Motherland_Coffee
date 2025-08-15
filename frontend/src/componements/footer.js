// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/footer_logo.png'; 
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container px-4">
        {/* Left: Logo */}
        <div className="footer-section left">
          <img 
            src={logo}  
            alt="Motherland Coffee Logo" 
            className="footer-logo" 
          />
        </div>

        {/* Center: Company Name */}
        <div className="footer-section center">
          <span className="company-name">MOTHERLAND COFFEE (PTY) LTD.</span>
        </div>

        {/* Right: Socials */}
        <div className="footer-section right">
          <span className="follow-us-text">Follow Us</span>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
