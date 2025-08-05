import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'

function ThankYou() {
    return (
        <div className="container-fluid pageContainer d-flex flex-column min-vh-100">
            <h1 className="title text-center my-4">Thank you for participating</h1>

            <footer className="footer bg-dark text-white">
              <div className="footer-container">
                      
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
                        <span className="company-name">MOTHERLAND COFEE (PTY) LTD.</span>
                      </div>
            
                      {/* Right: Socials */}
                      <div className="footer-section right">
                        <span className="follow-us-text">Follow Us</span>
                        <div className="social-icons">
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20} />
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} />
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20} />
                          </a>
                        </div>
                      </div>
            
                    </div>
                  </footer>

        </div>
    )
}

export default ThankYou;