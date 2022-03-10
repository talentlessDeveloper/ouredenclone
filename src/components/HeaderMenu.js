import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function HeaderMenu({
  linkOpen,
  menuToggler,
  linkToggler,
  contactOpen,
  contactToggler,
  pathname,
  handleIntercom,
}) {
  return (
    <div className="header__menu">
      <ul className="header__menu__links">
        <li className="header__menu__list">
          <Link
            to="/eden_means_easy"
            className="header__menu--item"
            onClick={menuToggler}
          >
            Why Eden?
          </Link>
        </li>

        <li className="header__menu__list">
          <div
            className={`header__menu--item  links--btns ${
              linkOpen
                ? "header__menu--services open"
                : "header__menu--services"
            }  `}
          >
            <button className="link--btn">
              <span>Services</span>
              <IoIosArrowDown className="link--icon" onClick={linkToggler} />
            </button>

            <ul className="services--links">
              <li className="header__menu__list">
                <Link
                  to="/food"
                  className="header__menu--item number"
                  onClick={menuToggler}
                >
                  <span className="service--icon food">🥘</span>
                  <span>Food</span>
                </Link>
              </li>
              <li className="header__menu__list">
                <Link
                  to="/laundry"
                  className="header__menu--item laundry"
                  onClick={menuToggler}
                >
                  <span className="service--icon laundry">🧺</span>
                  <span>Laundry</span>
                </Link>
              </li>
              <li className="header__menu__list">
                <Link
                  to="/cleaning"
                  className="header__menu--item food"
                  onClick={menuToggler}
                >
                  <span className="service--icon cleaning">🏠</span>
                  <span>Cleaning</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li
          className={
            pathname === "/eden_means_easy" ? "hide" : "header__menu__list"
          }
        >
          <Link
            to="/companies"
            className="header__menu--item"
            onClick={menuToggler}
          >
            Companies
          </Link>
        </li>

        <li className="header__menu__list">
          <Link
            to="/pricing"
            className="header__menu--item"
            onClick={menuToggler}
          >
            Pricing
          </Link>
        </li>

        <li className="header__menu__list">
          <div
            className={`header__menu--item  ${
              contactOpen
                ? "header__menu--contacts open"
                : "header__menu--contacts"
            }`}
          >
            <button className="link--btn">
              <span>Contact us</span>
              <IoIosArrowDown className="link--icon" onClick={contactToggler} />
            </button>

            <ul className="contacts--links">
              <li className="header__menu__list">
                <a
                  href="tel:+2348146757886"
                  className="header__menu--item number"
                >
                  +2348146757886
                </a>
              </li>

              <li className="header__menu__list">
                <Link
                  to="/contact_us"
                  className="header__menu--item chat"
                  onClick={() => {
                    menuToggler();
                    handleIntercom();
                  }}
                >
                  Message
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="header__menu__list header__menu--cta">
          <a
            href="#getStarted"
            className="header__menu--item header__menu__cta cta"
            onClick={menuToggler}
          >
            {pathname === "/eden_means_easy" ? "Sign Up Now" : "Get Started"}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
