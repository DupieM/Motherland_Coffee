import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import SouthAfricaSVG from '../../assets/south_africa.svg'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'
import Footer from "../../componements/footer";

import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { name: "Cape Town (City Centre)", x: "27%", y: "90%" },
    { name: "Johannesburg (Bedfordview)", x: "65%", y: "28%" }, 
    { name: "Johannesburg (Randburg)", x: "60%", y: "30%" },                    
    { name: "Pretoria (Groenkloof)", x: "67%", y: "22%" }     
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
    <div>
    <div className="container-fluid page-Container d-flex flex-column min-vh-100">
      <main className="flex-grow-1"> 
        <div className="row justify-content-center"> 
          <div className="col-lg-8 col-md-10 col-sm-12"> 

            <h1 className="title text-center my-4">{t('welcome')}</h1>

            {/* Info Box - Centered due to parent row and col classes */}
            <div className="infoBox p-4 mb-4 text-center">
              <p>{t('descriptionlineone')}</p>
              <p>{t('descriptionlinetwo')}</p>
              <p><strong>{t('descriptionlinethree')}</strong></p>
              <p>{t('descriptionlinefour')}</p>
              <p><strong>{t('descriptionlinefive')}</strong></p>
              <p>{t('descriptionlinesix')}</p>
              <p>{t('descriptionlineseven')}</p>
            </div>

            <h2 className="subtitlet text-center my-4">{t('subheading')}</h2>

            {/* Map Container - Centered due to parent row and col classes */}
            <div className="mapContainer position-relative mb-5">
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
                    {t('buttontextone')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main> {/* End of main content */}

      


    </div>

    <Footer />

    </div>
  );
};

export default Home;