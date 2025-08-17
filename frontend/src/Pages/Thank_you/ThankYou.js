import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/footer_logo.png'
import './ThankYou.css';
import Footer from "../../componements/footer";

import { useTranslation } from 'react-i18next';

// Import your voucher images directly
import voucherEn1 from '../../assets/vouchers/English_Reciever.jpg';
import voucherEn2 from '../../assets/vouchers/English_Sender.jpg';
import voucherAf1 from '../../assets/vouchers/Afrikaans_Reciever.jpg';
import voucherAf2 from '../../assets/vouchers/Afrikaans_Sender.jpg';
import voucherZu1 from '../../assets/vouchers/Zulu_Reciever.jpg';
import voucherZu2 from '../../assets/vouchers/Zulu_Sender.jpg';
import voucherXh1 from '../../assets/vouchers/Xhosa_Reciever.jpg';
import voucherXh2 from '../../assets/vouchers/Xhosa_Sender.jpg';

function ThankYou() {

  const { t, i18n } = useTranslation();
  const language = i18n.language;

  // Define the voucher URLs using the imported images
  const voucherUrls = {
    en: [voucherEn1, voucherEn2],
    af: [voucherAf1, voucherAf2],
    zu: [voucherZu1, voucherZu2],
    xh: [voucherXh1, voucherXh2],
  };

  const handleDownload = () => {
    // Get the correct array of URLs for the current language
    const urlsToDownload = voucherUrls[language] || voucherUrls['en'];

    // Loop through the URLs and trigger a download for each one
    urlsToDownload.forEach((url, index) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = `Motherland_Coffee_Voucher_${language}_${index + 1}.png`; // Set the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div>
      <div className="container-fluid page-Containertwo d-flex flex-column min-vh-100">
        {/* Video Background */}
        <video autoPlay loop muted className="background-videotwo">
          <source src={require('../../assets/thank_you.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="title1 text-center my-4">{t("thankyou.text")}</h1>
        <p className="subtitle text-center">Click the button below to download your vouchers!</p>
        <p>* Note two voucher are dowloaded one for you and one for person you send sticker</p>
        <button onClick={handleDownload} className="download-btn">Download Vouchers</button>
      </div>
      <Footer />
    </div>
  );
}

export default ThankYou;