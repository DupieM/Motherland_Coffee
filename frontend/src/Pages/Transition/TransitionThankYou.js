import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Transition.css";

const TransitionToThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById("transitionVideo");
    if (video) {
      video.play();
      video.onended = () => {
        navigate("/thankyou"); // navigate to thank you page
      };
    }
  }, [navigate]);

  return (
    <div className="transition-container">
      <video id="transitionVideo" className="transition-video" autoPlay muted>
        <source src={require("../../assets/Transition.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TransitionToThankYou;
