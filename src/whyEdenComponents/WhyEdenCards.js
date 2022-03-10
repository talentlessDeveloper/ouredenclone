import React from "react";

import logo from "../assets/why-eden-logo.svg";
import parse from "html-react-parser";

function WhyEdenCards({
  handlePromiseModal,
  header,
  title,
  image,
  background,
  downloadBtn,
  description,
  video,
  className,
}) {
  return (
    <div
      className={`whyEdenValue__card  ${className}`}
      style={{ background: `${background}` }}
    >
      <div className="whyEdenValue__header">
        <h4>{header}</h4>
        <a className={downloadBtn ? "download-btn" : "hide"} href="#getStarted">
          Download The App
        </a>
      </div>

      <div className="whyEdenValue__content ">
        <div className="whyEdenValue__text">
          <div className="whyEdenValue__title">
            <h3>{title}</h3>
          </div>
          <p className="whyEdenValue__description">{parse(description)}</p>
        </div>
        <div className="whyEdenValue__img">
          <img src={image} alt="value-img" className={video ? "hide" : ""} />
          <video
            className={video ? "video--value" : "hide"}
            loop="loop"
            autoPlay="autoplay"
          >
            <source src={image} type="video/mp4" />
          </video>
        </div>
      </div>

      <button className="whyEdenValue__btn" onClick={handlePromiseModal}>
        <div className="modal--solid">
          <img src={logo} alt="promise" />
        </div>
        <span>Read our Ceo's Promise</span>
      </button>
    </div>
  );
}

export default WhyEdenCards;
