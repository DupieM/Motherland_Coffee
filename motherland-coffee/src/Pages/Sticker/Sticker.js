import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from '../../assets/footer_logo.png'
import Footer from "../../componements/footer";
import './Sticker.css'

function Sticker() {
    return (
        <div className="container-fluid pageContainer d-flex flex-column min-vh-100">
            <h3 className="title text-center my-4">1. Enter full name</h3>
            <h3 className="title text-center my-4">2. Choose Home Language</h3>
            <h3 className="title text-center my-4">3. Write Message</h3>
            <h3 className="title text-center my-4">4. Choose Pattern</h3>
            <h3 className="title text-center my-4">5. Choose Colour</h3>

            <Footer />

        </div>
    )
}

export default Sticker;