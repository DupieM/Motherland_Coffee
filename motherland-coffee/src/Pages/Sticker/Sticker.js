import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'

function Sticker() {
    return (
        <div className="container-fluid pageContainer d-flex flex-column min-vh-100">
            <h3 className="title text-center my-4">1. Enter full name</h3>
            <h3 className="title text-center my-4">2. Choose Home Language</h3>
            <h3 className="title text-center my-4">3. Write Message</h3>
            <h3 className="title text-center my-4">4. Choose Pattern</h3>
            <h3 className="title text-center my-4">5. Choose Colour</h3>

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

export default Sticker;