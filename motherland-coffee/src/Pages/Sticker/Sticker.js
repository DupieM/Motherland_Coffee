import React, { useState, useEffect } from "react";
import { httpsCallable } from "firebase/functions"; // Ensure this import is correct
import "./Sticker.css";
import { getPatterns } from "../../services/dbService";
import { functions } from "../../firebase";

function Sticker() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");
  const [borderColor, setBorderColor] = useState("#000");
  const [email, setEmail] = useState("");

  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);

  const colors = ["#b48a60", "#ff0000", "#00ff00", "#0000ff", "#ff9900", "#800080", "#000"]; // Added #000 (black) for completeness

  // Effect to fetch patterns from the database on component mount
  useEffect(() => {
    async function fetchPatterns() {
      try {
        const patternsFromDb = await getPatterns();
        setPatterns(patternsFromDb);
        console.log("Fetched patterns array:", patternsFromDb);
        // Set the initial selected pattern to the first one fetched
        if (patternsFromDb.length > 0) {
          setSelectedPattern(patternsFromDb[0].url);
        }
      } catch (error) {
        console.error("Error fetching patterns:", error);
      }
    }
    fetchPatterns();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handles navigation to the next pattern in the carousel
  const handleNextPattern = () => {
    if (patterns.length > 0) {
      const nextIndex = (currentPatternIndex + 1) % patterns.length;
      setCurrentPatternIndex(nextIndex);
      setSelectedPattern(patterns[nextIndex].url);
    }
  };

  // Handles navigation to the previous pattern in the carousel
  const handlePrevPattern = () => {
    if (patterns.length > 0) {
      const prevIndex = (currentPatternIndex - 1 + patterns.length) % patterns.length;
      setCurrentPatternIndex(prevIndex);
      setSelectedPattern(patterns[prevIndex].url);
    }
  };

  // Handles the form submission and sends the sticker via email
  const handleSubmit = async (e) => { // Added 'e' for the event object
    e.preventDefault(); // Prevent default form submission to stop page reload

    // Basic validation to ensure all fields are filled
    if (!email || !name || !message) {
      // Replaced alert with a console log or custom UI for better UX
      console.log("Please complete all fields.");
      alert("Please complete all fields."); // Keeping alert for now as per previous usage
      return;
    }

    // Construct the HTML content for the sticker email
    const stickerHTML = `
      <html>
      <body>
        <div style="
          border:10px solid ${borderColor};
          padding:20px; width:200px; text-align:center;
          background-image: ${selectedPattern ? `url(${selectedPattern})` : "none"};
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
      // Call the Firebase Cloud Function using httpsCallable
      const sendEmailFunction = httpsCallable(functions, "sendStickerEmail");
      const result = await sendEmailFunction({ email, htmlContent: stickerHTML });

      // Check the result from the Cloud Function
      if (result.data && result.data.success) {
        console.log("Sticker sent successfully to email:", email);
        alert("Sticker sent to your email!"); // Success message
        // Optionally clear the form after successful submission
        setName("");
        setMessage("");
        setEmail("");
        setBorderColor("#000");
        setCurrentPatternIndex(0);
        if (patterns.length > 0) {
          setSelectedPattern(patterns[0].url);
        }
      } else {
        console.error("Error sending sticker (function returned error):", result.data);
        alert("Failed to send email. Please try again."); // More specific error
      }
    } catch (error) {
      // Catch any network or client-side errors during the function call
      console.error("Error calling sendStickerEmail function:", error);
      alert("Failed to send email. Please check your internet connection or try again later.");
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
          backgroundImage: selectedPattern ? `url(${selectedPattern})` : "none",
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
          backgroundPosition: "center",
          backgroundColor: "transparent", // Ensures background image is visible
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