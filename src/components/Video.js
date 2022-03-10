import React, { useEffect, useState } from "react";
import edenVideo from "../assets/EDEN_LIFE__q1rgcz.mp4";
import videoBg from "../assets/video-bg.svg";

function Video({ debounced, changeBg }) {
  const [attr, setAtrr] = useState(false);

  const handleAtrr = () => setAtrr(true);
  const handleAtrr1 = () => setAtrr(false);

  useEffect(() => {
    window.addEventListener("resize", debounced);

    return () => window.removeEventListener("resize", debounced);
  });

  return (
    <section
      className="video"
      id="video"
      style={
        !changeBg
          ? {
              background: `#f7fdff url(${videoBg}) no-repeat`,
              backgroundSize: "50%",
              backgroundPosition: "bottom 75px right",
            }
          : {
              background: `#f7fdff url(${videoBg}) no-repeat right bottom 70px / 30%`,
            }
      }
    >
      <div className="video__content wrapper">
        <div className="video__title">
          <h2>Why Eden?</h2>
        </div>
        <div className="video__item">
          <video
            controls={`${attr ? "controls" : ""}`}
            onMouseEnter={handleAtrr}
            onMouseLeave={handleAtrr1}
            muted
            autoPlay
          >
            <source src={edenVideo} />
            <p>Your browser doesn't support HTML5 video.</p>
          </video>
        </div>
      </div>
    </section>
  );
}

export default Video;
