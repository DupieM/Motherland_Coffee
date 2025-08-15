import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'
import './ThankYou.css';
import Footer from "../../componements/footer";

function ThankYou() {
  return (
    <div>
    <div className="container-fluid pageContainer d-flex flex-column min-vh-100">
      <h1 className="title text-center my-4">Thank you for participating</h1>
    </div>

    <Footer />

    </div>
  )
}

export default ThankYou;