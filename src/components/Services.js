import React from "react";
import edenFood from "../assets/food-img1_ls530a.png";
import edenLaundry from "../assets/laundry-img1_ijsx4k.png";
import edenCleaning from "../assets/cleaning-img1_ldwcml.png";
import serviceBg from "../assets/service-bg1_ofyubm.svg";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function Services({ type, title, subtitle, padding }) {
  return (
    <section
      className="services"
      style={{ background: `#fff url(${serviceBg}) no-repeat` }}
    >
      <div
        className="services__content wrapper"
        style={
          padding
            ? {
                padding: "120px 0 200px",
              }
            : null
        }
      >
        <div className="services__title">
          <h2>{title}</h2>

          <p>{subtitle}</p>
        </div>

        <div className="services__grid">
          <div
            className={
              type === "food"
                ? "services__type services__food hide"
                : "services__type services__food"
            }
          >
            <h3>🥘</h3>
            <h5>Food</h5>
            <p>
              Chef-cooked meals you'll enjoy. Delivered fresh and on schedule.
            </p>

            <Link to="/food">
              <span>Explore</span>
              <CgArrowRight className="arrow" />
            </Link>

            <div className="services__img">
              <img src={edenFood} alt="food" />
            </div>
          </div>

          <div
            className={
              type === "laundry"
                ? "services__type services__laundry hide"
                : "services__type services__laundry"
            }
          >
            <h3>🧺</h3>

            <h5>Laundry</h5>
            <p>Fresh laundry, carefully executed in 48 hours or less.</p>

            <Link to="/laundry">
              <span>Explore</span>
              <CgArrowRight className="arrow" />
            </Link>

            <div className="services__img">
              <img src={edenLaundry} alt="food" />
            </div>
          </div>

          <div
            className={
              type === "cleaning"
                ? "services__type services__cleaning hide"
                : "services__type services__cleaning"
            }
          >
            <h3>🏠</h3>

            <h5>Cleaning</h5>
            <p>Professional home cleaning you can trust.</p>

            <Link to="/cleaning">
              <span>Explore</span>
              <CgArrowRight className="arrow" />
            </Link>

            <div className="services__img">
              <img src={edenCleaning} alt="food" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
