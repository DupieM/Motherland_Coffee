import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'
import './ThankYou.css';
import Footer from "../../componements/footer";

import { useTranslation } from 'react-i18next';

function ThankYou() {

  const { t, i18n } = useTranslation();

  return (
    <div>
    <div className="container-fluid page-Containertwo d-flex flex-column min-vh-100">
      {/* Video Background */}
      <video autoPlay loop muted className="background-videotwo">
        <source src={require('../../assets/thank_you.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <h1 className="title1 text-center my-4">{t("thankyou.text")}</h1>

    </div>

    <Footer />

    </div>
  )
}

export default ThankYou;