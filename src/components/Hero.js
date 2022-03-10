import React, { useEffect, useState } from "react";
import heroBgMobile from "../assets/heroBg-mobile.svg";
import heroBg from "../assets/heroBg1.svg";

import { CgPlayButtonO } from "react-icons/cg";
import parser from "html-react-parser";

function Hero({
  debounced,
  changeBg,
  eden,
  offers,
  imgDisplay,
  heroPhone,
  titleUp,
  titleDown,
  cta,
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (idx >= eden.length - 1) {
        setIdx(0);
      } else if (idx < eden.length) {
        setIdx((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [idx, eden.length]);

  useEffect(() => {
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  });

  return (
    <div
      className="hero"
      style={
        changeBg && imgDisplay
          ? {
              background: `url(${heroBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "57px 141px",
            }
          : !changeBg && imgDisplay
          ? {
              background: `url(${heroBgMobile}) no-repeat`,
            }
          : {
              background: "#f6fffa",
            }
      }
    >
      <div className="hero__content wrapper">
        <div className="hero__text">
          <h1>
            {parser(titleUp)}

            <span
              style={{
                color: `${eden[idx].color}`,
                boxShadow: `${eden[idx].shadow} 0 -23px 0px inset`,
              }}
            >
              {eden[idx].service}
            </span>

            {parser(titleDown)}
          </h1>

          {offers.length === 0 ? null : (
            <>
              <ul>
                {offers.map((offer, idx) => (
                  <li key={`offer${idx}`}>{offer}</li>
                ))}
              </ul>
              <p>Schedule them, and never worry about them again. Ever.</p>
            </>
          )}

          <div className="hero__button">
            <a href="#getStarted" className="hero__button--solid">
              {parser(cta)}
            </a>

            <a href="#video" className="hero__button--link">
              <CgPlayButtonO className="hero__play" />
              Watch the video
            </a>
          </div>
        </div>

        <div className="hero__img">
          <img src={heroPhone} alt="eden-phone" className="hero__phone" />

          <img
            src={eden[idx].img}
            alt="eden-laundry"
            className={imgDisplay ? "hero__laundry" : "hide"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
