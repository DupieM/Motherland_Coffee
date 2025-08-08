import React, { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import "./Sticker.css";
import { db, functions } from "../../firebase";

function Sticker() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");
  const [borderColor, setBorderColor] = useState("#000");
  const [email, setEmail] = useState("");

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff9900", "#800080"];

  // Fetch patterns from Firestore
  useEffect(() => {
    async function fetchPatterns() {
      try {
        const snapshot = await getDocs(collection(db, "patterns"));
        const urls = snapshot.docs.map((doc) => doc.data().url);
        setPatterns(urls);
      } catch (error) {
        console.error("Error fetching patterns:", error);
      }
    }
    fetchPatterns();
  }, []);

  // Send email with Cloud Function
  const handleSubmit = async () => {
    if (!email || !name || !message) {
      alert("Please complete all fields.");
      return;
    }

    const stickerHTML = `
      <html>
      <body>
        <div style="
          border:10px solid ${borderColor};
          ${selectedPattern ? `border-image: url(${selectedPattern}) 30 round;` : ""}
          padding:20px; width:200px; text-align:center;">
          <h3>${name}</h3>
          <p>${message}</p>
        </div>
      </body>
      </html>
    `;

    try {
      const sendEmail = httpsCallable(functions, "sendStickerEmail");
      await sendEmail({ email, htmlContent: stickerHTML });
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
      <div className="patterns">
        {patterns.length > 0 ? (
          patterns.map((pattern, idx) => (
            <img
              key={idx}
              src={pattern}
              alt={`Pattern ${idx}`}
              className={`pattern-option ${selectedPattern === pattern ? "selected" : ""}`}
              onClick={() => {
          setSelectedPattern(pattern);
          console.log("Selected Pattern:", pattern); // Add this line
        }}
            />
          ))
        ) : (
          <p style={{ color: "white" }}>Loading patterns...</p>
        )}
      </div>

      <h3 className="title1 text-center my-4">4. Choose Colour</h3>
      <div className="colors">
        {colors.map((color, idx) => (
          <button
            key={idx}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => setBorderColor(color)}
          />
        ))}
      </div>

      <h3 className="title1 text-center my-4">Sticker Preview</h3>
      <div
  className={`sticker-preview ${selectedPattern ? 'sticker-pattern-background' : ''}`}
  style={{
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: borderColor,
    backgroundImage: selectedPattern ? `url(${selectedPattern})` : "none",
    color: "#000",
    padding: "20px",
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
