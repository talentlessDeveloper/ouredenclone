import React, { useEffect } from "react";
import playstoreImg from "../assets/playstore_n43eju.svg";
import appstoreImg from "../assets/appstore_o1bj6d.svg";
import edenphoneImg from "../assets/footer-phone_xeixqy.svg";
import footerBg from "../assets/service-bg1_ofyubm.svg";
import eden from "../assets/eden-logo.svg";
import twitter from "../assets/twitter_pxdich.svg";
import instagram from "../assets/instagram_erb6q6.svg";
import linkedin from "../assets/linkedin_utcbna.svg";
import facebook from "../assets/facebook_cqsjdf.svg";
import { Link } from "react-router-dom";

function Footer({ debounced, changeBg }) {
  useEffect(() => {
    debounced();
    window.addEventListener("resize", debounced);

    return () => window.removeEventListener("resize", debounced);
  });
  return (
    <section
      className="footer"
      style={
        changeBg
          ? {
              background: `url(${footerBg}) no-repeat 0 100%, url(${footerBg}) no-repeat  100% 100%`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 100%, 100% 100%",
            }
          : { background: "#fff" }
      }
    >
      <div className="footer__content wrapper" id="getStarted">
        <div className="footer__top">
          <div className="footer__top-text">
            <h3>Download the app</h3>
            <p>it takes less than 5 minutes to signup!</p>

            <div className="footer__top-link">
              <a
                href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
                target="_blank"
                rel="noreferrer"
              >
                <img src={playstoreImg} alt="googleplay" />
              </a>
              <a
                href="https://apps.apple.com/us/app/eden-life/id1482373755?ls=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={appstoreImg} alt="applestore" />
              </a>
            </div>
          </div>

          <img src={edenphoneImg} alt="phone" className="footer__top-img" />
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-title">
            <Link to="/">
              <img src={eden} alt="Eden" />
            </Link>
            <p className="footer__bottom-mission">
              10x-ing the quality of life on the continent
            </p>
          </div>

          <div className="footer__bottom-nav">
            <ul className="footer__bottom-service">
              <li>
                <p>Services</p>
              </li>
              <li>
                <Link to="/food">Food</Link>
              </li>
              <li>
                <Link to="/laundry">Laundry</Link>
              </li>
              <li>
                <Link to="/cleaning">Cleaning</Link>
              </li>
            </ul>
            <ul className="footer__bottom-company">
              <li>
                <p>Company</p>
              </li>
              <li>
                <Link to="/food">About us</Link>
              </li>
              <li>
                <Link to="/companies">Companies</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
            <ul className="footer__bottom-other">
              <li>
                <p>Other</p>
              </li>
              <li>
                <Link to="/food">FAQs</Link>
              </li>
              <li>
                <Link to="/laundry">Blog</Link>
              </li>
              <li>
                <Link to="/cleaning">Contact Us</Link>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer__bottom-socials">
            <a
              href="https://www.twitter.com/ouredenlife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/ouredenlife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>

            <a
              href="https://www.facebook.com/ouredenlife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>

            <a
              href="https://www.linkedin.com/ouredenlife"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <p className="footer__bottom-copyright">
            2022 Eden Life Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
