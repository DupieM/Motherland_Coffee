import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import SouthAfricaSVG from '../../assets/south_africa.svg'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const Home = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { name: "Cape Town", x: "15%", y: "75%" },     
    { name: "Johannesburg", x: "65%", y: "28%" },   
    { name: "Durban", x: "75%", y: "55%" },         
    { name: "Pretoria", x: "67%", y: "22%" }        
  ];

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleContinue = () => {
    if (selectedLocation) {
      navigate(`/sticker/${selectedLocation.name}`);
    }
  };

  return (
    // Using Bootstrap flex utilities for full page height and footer sticky
    <div className="container-fluid pageContainer d-flex flex-column min-vh-100">
      <main className="flex-grow-1"> 
        <div className="row justify-content-center"> 
          <div className="col-lg-8 col-md-10 col-sm-12"> 

            <h1 className="title text-center my-4">Welcome Coffee Lovers</h1>

            {/* Info Box - Centered due to parent row and col classes */}
            <div className="infoBox p-4 mb-4 text-center">
              <p>Every cup has a story and we want to hear yours.</p>
              <p>Start by clicking on any Motherland Coffee location across South Africa. Then, tell us:</p>
              <p><strong>What does coffee mean to you?</strong></p>
              <p>Choose your mother language, share your message, and design a unique sticker inspired by your words.</p>
              <p><strong>Once you're done, you’ll receive a special reward:</strong></p>
              <p>Get a 10% coupon or Buy one, get a free coffee voucher – our way of saying thanks for being part of our journey.</p>
              <p>Let’s celebrate language, coffee, and connection one cup at a time.</p>
            </div>

            <h2 className="subtitle text-center my-4">Map of Motherland Coffee</h2>

            {/* Map Container - Centered due to parent row and col classes */}
            <div className="mapContainer position-relative mb-5">
              {/* The SVG map image */}
              <img src={SouthAfricaSVG} alt="Map of Motherland Coffee locations in South Africa" className="southAfricaMapImage" />

              {/* Markers */}
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="marker"
                  style={{ left: loc.x, top: loc.y }}
                  onClick={() => handleMarkerClick(loc)}
                  title={loc.name} // Adds a tooltip on hover
                />
              ))}

              {/* Popup for selected location */}
              {selectedLocation && (
                <div className="popup card p-3 shadow-sm">
                  <h5 className="card-title mb-2">{selectedLocation.name}</h5>
                  <button className="btn btn-primary" onClick={handleContinue}>
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main> {/* End of main content */}

      {/* Footer */}
      <footer className="footer mt-auto py-3 bg-dark text-white"> {/* bg-dark for black background, text-white for text */}
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Left section: Logo and Company Name */}
          <div className="footer-left d-flex align-items-center mb-2 mb-md-0">
            {/* Make sure MotherlandLogo points to your actual logo image file */}
            <img alt="Motherland Coffee Logo" className="footer-logo me-3" />
            <span className="company-name text-uppercase">Motherland Coffee (Pty) Ltd.</span>
          </div>

          {/* Right section: Follow Us and Social Icons */}
          <div className="footer-right text-md-end">
            <span className="follow-us-text me-3 d-block d-md-inline">Follow Us</span>
            <div className="social-icons d-inline-block">
              <a href="https://facebook.com/motherlandcoffee" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/motherlandcoffee" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/motherlandcoffee" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={24} /> {/* Using FaTwitter for 'X' icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center mt-2">
            <small className="text-muted-dark">© 2025 Motherland Coffee. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;