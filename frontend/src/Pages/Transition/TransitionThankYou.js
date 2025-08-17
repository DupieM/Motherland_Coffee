import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Transition.css";

const TransitionToThankYou = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();

      video.onended = () => {
        // Add fade-out effect
         document.querySelector(".transition-container")?.classList.add("fade-out");

        // Wait for fade-out duration before navigating
        setTimeout(() => {
          navigate("/thankyou");
        }, 1000); // match this to your CSS fade duration
      };
    }
  }, [navigate]);

  return (
    <div className="transition-container">
      <video
        ref={videoRef}
        id="transitionVideo"
        className="transition-videotwo"
        autoPlay
        muted
      >
        <source src={require("../../assets/Transition.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TransitionToThankYou;