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

  const colors = ["#b48a60", "#ff0000"];

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
  <div className="container-fluid page-Containerone d-flex justify-content-center align-items-center">
    <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "1200px" }}>
      <h3 className="title1 mb-4">Let us know who's sending the love</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3 className="title1 mb-4">Share your words or greeting</h3>
      <textarea
        className="form-control mb-3"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <h3 className="title1 mb-4">Choose a background you like</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button onClick={handlePrevPattern} className="btn btn-secondary">Previous</button>
        {patterns.length > 0 ? (
          <img
            src={patterns[currentPatternIndex].url}
            alt={patterns[currentPatternIndex].name}
            style={{ maxHeight: "100px" }}
            className="img-fluid"
          />
        ) : (
          <p>Loading patterns...</p>
        )}
        <button onClick={handleNextPattern} className="btn btn-secondary">Next</button>
      </div>

      <h3 className="title1 mb-4">Add your favourite colour touch</h3>
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

      <div
        className="mb-4"
        style={{
          border: `10px solid ${borderColor}`,
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: selectedPattern
            ? `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url("${selectedPattern}")`
            : "none",
          backgroundSize: "cover",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <div>
          <p>{name}</p>
          <p>{message}</p>
        </div>
      </div>

      <h3 className="title1 mb-4">Where we'll send your sticker</h3>
      <input
        type="email"
        className="form-control mb-4"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="submit-btn w-100" onClick={handleSubmit}>
        Submit & Send
      </button>
    </div>
  </div>
);


}

export default Sticker;