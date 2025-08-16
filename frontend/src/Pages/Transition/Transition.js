import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Transition.css";

const Transition = () => {
  const navigate = useNavigate();
  const { location } = useParams();

  useEffect(() => {
    const video = document.getElementById("transitionVideo");
    if (video) {
      video.play();
      video.onended = () => {
        navigate(`/sticker/${location}`);
      };
    }
  }, [navigate, location]);

  return (
    <div className="transition-container">
      <video
        id="transitionVideo"
        className="transition-video"
        autoPlay
        muted
      >
        <source src={require("../../assets/Transition.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Transition;