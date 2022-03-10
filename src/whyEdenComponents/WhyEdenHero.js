import React from "react";
import whyEdenVideo from "../assets/hero-video.webm";

function WhyEdenHero() {
  return (
    <section className="whyEdenHero">
      <div className="whyEdenHero__content wrapper">
        <div className="whyEdenHero__title">
          <h1>
            <span>10 Reasons</span> Why <br />
            Eden Means Easy
          </h1>

          <ul>
            <li>Your laundry picked up and dropped off within 48 hours. 👔</li>
            <li>Professional cleaners scrubbing and sweeping your home. 🏡</li>

            <li>
              Chef-made meals delivered from a menu of over 100 delicious meal
              choices. 🥘
            </li>
          </ul>
        </div>
        <div className="whyEdenHero__video">
          <video loop autoPlay>
            <source src={whyEdenVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default WhyEdenHero;
