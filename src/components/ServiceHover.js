import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function ServiceHover({ changeIcon, changeIcon2, changeIcon3, ...icon }) {
  return (
    <>
      <div className="header__hover service--hover">
        <div className="header__hover--text">
          <h3>Eden Services</h3>
          <p>Convenience you can always depend on. Always</p>
        </div>

        <ul className="header__hover--service">
          <li onMouseEnter={changeIcon} onMouseLeave={changeIcon}>
            <Link to="/food" className="food-link">
              <span className="service--icon food">🥘</span>
              <span>Food</span>
              {icon.food ? (
                <CgArrowRight className="arrow-food" />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </Link>
          </li>

          <li onMouseEnter={changeIcon2} onMouseLeave={changeIcon2}>
            <Link to="/laundry" className="laundry-link">
              <span className="service--icon laundry">🧺</span>
              <span>Laundry</span>
              {icon.laundry ? (
                <CgArrowRight className="arrow-laundry" />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </Link>
          </li>

          <li onMouseEnter={changeIcon3} onMouseLeave={changeIcon3}>
            <Link to="/cleaning" className="cleaning-link">
              <span className="service--icon cleaning">🏠</span>
              <span>Cleaning</span>
              {icon.cleaning ? (
                <CgArrowRight className="arrow-clean" />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ServiceHover;
