import React, { useState, useEffect } from "react";
import { httpsCallable } from "firebase/functions";
import "./Sticker.css";
import { functions, storage } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db } from "../../firebase";

function Sticker() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");
  const [borderColor, setBorderColor] = useState("#000");
  const [email, setEmail] = useState("");
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

  const colors = ["#b48a60", "#ff0000", "#00ff00", "#0000ff", "#ff9900", "#800080", "#000"];

  // ✅ Original naming: getPatterns
  async function getPatterns() {
    const snapshot = await getDocs(collection(db, "patterns"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      url: doc.data().url // Already stored as public URL
    }));
    return data;
  }

  useEffect(() => {
    async function fetchPatterns() {
      try {
        const patternsFromDb = await getPatterns();
        console.log("Fetched patterns array:", patternsFromDb);
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
          background-repeat: repeat;
          background-size: 80px 80px;
          background-position: center;">
          <h3>${name}</h3>
          <p>${message}</p>
        </div>
      </body>
      </html>
    `;

    try {
      const sendEmailFunction = httpsCallable(functions, "sendStickerEmail");
      await sendEmailFunction({ email, htmlContent: stickerHTML });
      alert("Sticker sent to your email!");
    } catch (error) {
      console.error("Error sending sticker:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="container-fluid page-Containerone d-flex flex-column min-vh-100">
      <h3 className="title1 text-center my-4">1. Enter Full Name</h3>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3 className="title1 text-center my-4">2. Write Message</h3>
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <h3 className="title1 text-center my-4">3. Choose Pattern</h3>
      <div className="carousel-container">
        <button onClick={handlePrevPattern} className="carousel-button">Previous</button>
        {patterns.length > 0 ? (
          <img
            src={patterns[currentPatternIndex].url}
            alt={patterns[currentPatternIndex].name}
            className="carousel-image"
          />
        ) : (
          <p style={{ color: "white" }}>Loading patterns...</p>
        )}
        <button onClick={handleNextPattern} className="carousel-button">Next</button>
      </div>

      <h3 className="title1 text-center my-4">4. Choose Colour</h3>
      <div className="colors d-flex justify-content-center">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${borderColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setBorderColor(color)}
          />
        ))}
      </div>

      {console.log("Preview render, selectedPattern is:", selectedPattern)}

      {/* ✅ Debug test box */}
      {/* <div
        style={{
          height: "100px",
          width: "100px",
          border: "2px solid red",
          backgroundImage: selectedPattern ? `url("${selectedPattern}")` : "none",
          backgroundRepeat: "repeat",
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundColor: "transparent",
        }}
      ></div> */}

      {/* Actual Preview */}
      <div
        style={{
          border: `10px solid ${borderColor}`,
          minHeight: "400px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          backgroundImage: selectedPattern 
          ? `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("${selectedPattern}")` 
          : "none",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          backgroundPosition: "center",
          backgroundColor: "transparent",
        }}
      >
        <p>{name}</p>
        <p>{message}</p>
      </div>

      <h3 className="title1 text-center my-4">5. Enter Email to Receive Sticker</h3>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="submit-btn" onClick={handleSubmit}>
        Submit & Send
      </button>
    </div>
  );
}

export default Sticker;