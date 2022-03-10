import React, { useEffect, useState } from "react";
import logo from "../assets/eden-logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { useLocation } from "react-router-dom";
import ContactHover from "./ContactHover";
import ServiceHover from "./ServiceHover";

function Header({ debounceFn, handleIntercom }) {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [icon, setIcon] = useState({
    food: false,
    laundry: false,
    cleaning: false,
  });

  const changeIcon = () => {
    if (icon.food === true || icon.food === false) {
      setIcon({
        food: !icon.food,
        laundry: false,
        cleaning: false,
      });
    }
  };
  const changeIcon2 = () => {
    if (icon.laundry === true || icon.laundry === false) {
      setIcon({
        food: false,
        laundry: !icon.laundry,
        cleaning: false,
      });
    }
  };
  const changeIcon3 = () => {
    if (icon.laundry === true || icon.laundry === false) {
      setIcon({
        food: false,
        laundry: false,
        cleaning: !icon.cleaning,
      });
    }
  };

  const menuToggler = () => {
    setMenuOpen((p) => !p);
  };

  const linkToggler = () => {
    setLinkOpen((p) => !p);
  };

  const contactToggler = () => {
    setContactOpen((p) => !p);
  };

  const debounced = debounceFn(function changeHeaderBg() {
    if (window.scrollY > 110) {
      return setHeaderBg(true);
    } else {
      return setHeaderBg(false);
    }
  }, 200);

  useEffect(() => {
    debounced();
    window.addEventListener("scroll", debounced);

    return () => window.removeEventListener("scroll", debounced);
  }, [debounced]);

  return (
    <header
      className={`${menuOpen ? "header container open" : "header container"} ${
        headerBg ? "active" : ""
      }`}
    >
      <nav className="header__nav wrapper">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Eden" />
        </Link>
        <ul className="header__links hide-for-mobile">
          {pathname === "/food" ? (
            <li>
              <a href="#plan" className="header__links--item">
                Menu
              </a>
            </li>
          ) : null}

          {pathname === "/laundry" ? (
            <li>
              <a href="#plan" className="header__links--item">
                Laundry Plans
              </a>
            </li>
          ) : null}

          {pathname === "/cleaning" ? (
            <li>
              <a href="#plan" className="header__links--item">
                Cleaning plans
              </a>
            </li>
          ) : null}

          <li
            className={
              pathname === "/food" ||
              pathname === "/laundry" ||
              pathname === "/cleaning"
                ? "hide"
                : ""
            }
          >
            <Link to="/eden_means_easy" className="header__links--item">
              Why Eden?
            </Link>
          </li>

          <li
            className={
              pathname === "/food" ||
              pathname === "/laundry" ||
              pathname === "/cleaning"
                ? "hide"
                : ""
            }
          >
            <div className="header__links--item header__links--services ">
              <button className="header__links--btn link--btn">
                <span>Services</span>
                <IoIosArrowDown className="link--icon" />
              </button>

              <ServiceHover
                changeIcon={changeIcon}
                changeIcon2={changeIcon2}
                changeIcon3={changeIcon3}
                {...icon}
              />
            </div>
          </li>

          <li
            className={
              pathname === "/food" ||
              pathname === "/laundry" ||
              pathname === "/cleaning"
                ? "hide"
                : ""
            }
          >
            <Link
              to="/companies"
              className={
                pathname === "/eden_means_easy" ? "hide" : "header__links--item"
              }
            >
              Companies
            </Link>
          </li>

          <li
            className={
              pathname === "/food" ||
              pathname === "/laundry" ||
              pathname === "/cleaning"
                ? "hide"
                : ""
            }
          >
            <Link to="/pricing" className="header__links--item">
              Pricing
            </Link>
          </li>

          <li>
            <div className="header__links--item header__links--contacts">
              <button className="header__links--btn link--btn">
                <span>Contact us</span>
                <IoIosArrowDown className="link--icon" />
              </button>

              <ContactHover handleIntercom={handleIntercom} />
            </div>
          </li>

          <li>
            <a
              href="#getStarted"
              className="header__links--item header__links--cta cta"
            >
              {pathname === "/eden_means_easy" ? "Sign Up Now" : "Get Started"}
            </a>
          </li>
        </ul>

        <button className="header__toggle" onClick={menuToggler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <HeaderMenu
        linkOpen={linkOpen}
        menuToggler={menuToggler}
        linkToggler={linkToggler}
        contactOpen={contactOpen}
        contactToggler={contactToggler}
        pathname={pathname}
        handleIntercom={handleIntercom}
      />
    </header>
  );
}

export default Header;
