import React, { useState, useEffect } from "react";
import "./Sticker.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Footer from "../../componements/footer";

import { useTranslation } from 'react-i18next';

function Sticker() {

  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");
  const [borderColor, setBorderColor] = useState("#000");
  const [email, setEmail] = useState("");
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

  const colors = ["#7d6c5cff", "#795f3eff", "#201f1bff", "#9c7d51ff", "#817e40ff", "#302017ff", "#1e160eff", "#96816eff"];

  async function getPatterns() {
    const snapshot = await getDocs(collection(db, "patterns"));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      url: doc.data().url
    }));
  }

  useEffect(() => {
    async function fetchPatterns() {
      try {
        const patternsFromDb = await getPatterns();
        setPatterns(patternsFromDb);
        if (patternsFromDb.length > 0) {
          setSelectedPattern(patternsFromDb[0].url);
        }
      } catch (error) {
        console.error("Error fetching patterns:", error);
      }
    }
    fetchPatterns();
  }, []);

  const handleNextPattern = () => {
    if (patterns.length > 0) {
      const nextIndex = (currentPatternIndex + 1) % patterns.length;
      setCurrentPatternIndex(nextIndex);
      setSelectedPattern(patterns[nextIndex].url);
    }
  };

  const handlePrevPattern = () => {
    if (patterns.length > 0) {
      const prevIndex = (currentPatternIndex - 1 + patterns.length) % patterns.length;
      setCurrentPatternIndex(prevIndex);
      setSelectedPattern(patterns[prevIndex].url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      alert("Please complete all fields.");
      return;
    }

    const stickerHTML = `
      <html>
      <body>
        <div style="
          border:10px solid ${borderColor};
          padding:20px; width:200px; text-align:center;
          background-image: url('${selectedPattern}');
          background-repeat: no-repeat;
          background-size: 100px 100px;
          background-position: center;
          background-color: rgba(255, 255, 255, 0.11);
          background-blend-mode: lighten;">
          <h1 style="font-weight: bold; color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 0.70)">${name}</h1>
          <h2 style="font-weight: bold; color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 0.70)">${message}</h2>
        </div>
      </body>
      </html>
    `;

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, htmlContent: stickerHTML })
      });
      const data = await response.json();
      if (data.success) {
        alert("Sticker sent to your email!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending sticker:", error);
      alert("Failed to send email.");
    }
  };

  return (
  <div className="container-fluid page-Containerone d-flex justify-content-center align-items-center">
    <div className="card shadow-lg p-4 w-100 d-flex flex-column align-items-left" style={{ maxWidth: "940px" }}>

      {/* Name Input */}
      <h3 className="title1 mb-4 text-left">{t("sticker.headingone")}</h3>
      <br/>
      <input
        type="text"
        className="form-control mb-4 placeholder"
        style={{
          height: '20px',
          width: '300px',
          fontSize: '13pt',
          color: 'rgb(195, 154, 85)',
          borderColor: 'rgb(195, 154, 85)',
          borderStyle: 'solid',
        }}
        placeholder={t("sticker.placeholderone")}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Message Input */}
      <h3 className="title1 mb-4 text-left">{t("sticker.headingtwo")}</h3>
      <h7 className="subtitle mb-4 text-left">{t("sticker.subheading")}</h7>
      <br/>
      <br/>
      <textarea
        className="form-control mb-3 placeholder mx-auto"
        style={{
          height: '100px',
          width: '500px',
          fontSize: '13pt',
          color: 'rgb(195, 154, 85)',
          borderColor: 'rgb(195, 154, 85)',
        }}
        placeholder={t("sticker.placeholdertwo")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Carousel */}
      <h3 className="title1 mb-4 text-center">{t("sticker.headingthree")}</h3>
      <br/>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button onClick={handlePrevPattern} className="btn btn-secondary me-3">{t("sticker.buttontexttwo")}</button>
        {patterns.length > 0 ? (
          <img
            src={patterns[currentPatternIndex].url}
            alt={patterns[currentPatternIndex].name}
            style={{ height: "200px", width: '300px' }}
            className="img-fluid"
          />
        ) : <p>Loading patterns...</p>}
        <button onClick={handleNextPattern} className="btn btn-secondary ms-3">{t("sticker.buttontextthree")}</button>
      </div>

      {/* Colors */}
      <h3 className="title1 mb-4 text-center">{t("sticker.headingfour")}</h3>
      <div className="colors d-flex justify-content-center mb-3">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${borderColor === color ? "selected" : ""}`}
            style={{
              backgroundColor: color,
              border: borderColor === color ? "3px solid black" : "1px solid #ccc"
            }}
            onClick={() => setBorderColor(color)}
          />
        ))}
      </div>

      <br/>
      <br/>

      {/* Sticker Preview */}
      <div
        className="mb-4 mx-auto"
        style={{
          border: `8px solid ${borderColor}`,
          height: "240px",
          width: "400px",
          display: "flex",
          alignItems: "right",
          justifyContent: "right",
          backgroundImage: selectedPattern
            ? `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("${selectedPattern}")`
            : "none",
          backgroundSize: "440px 280px",
          backgroundRepeat: 'no-repeat',
          textAlign: "center",
          padding: "20px"
        }}
      >
        <div>
          <h1 className="text">{name}</h1>
          <h2 className="text">{message}</h2>
        </div>
      </div>

      {/* Email Input */}
      <h3 className="title1 mb-4 text-center">{t("sticker.headingfive")}</h3>
      <input
        type="email"
        className="form-control mb-4 placeholder mx-auto"
        style={{
          height: '20px',
          width: '300px',
          fontSize: '13pt',
          color: 'rgb(195, 154, 85)',
          borderColor: 'rgb(195, 154, 85)',
          borderStyle: 'solid'
        }}
        placeholder={t("sticker.placeholderthree")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Submit */}
      <button className="submit-btn w-50 mx-auto" onClick={handleSubmit}>
        {t("sticker.buttontextfour")}
      </button>

      <br/>
      <br/>

      <Footer />
    </div>
  </div>
);

}

export default Sticker;
