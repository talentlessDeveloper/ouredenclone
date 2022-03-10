import React from "react";
import { VscCircleFilled } from "react-icons/vsc";

import phone from "../assets/phone-desc.svg";

function CompanyDescription() {
  return (
    <>
      <section className="foodDescription description company">
        <div className="description__content wrapper">
          <div className="description__title">
            <h3>How it works</h3>
          </div>

          <div className="description__body">
            <div className="description__video-item visible">
              <img src={phone} alt="phone" />
            </div>

            <div className="description__slider">
              <div className="description__slider-timeline">
                <VscCircleFilled />
                <div className="dash dash-1">
                  <span></span>
                </div>

                <VscCircleFilled />
                <div className="dash dash-2">
                  <span></span>
                </div>

                <VscCircleFilled />
                <div className="dash dash-3">
                  <span></span>
                </div>
                <VscCircleFilled />
                <div className="dash dash-4">
                  <span></span>
                </div>
                <VscCircleFilled />
              </div>

              <div className="description__slider-text">
                <div className="text text-1 active">
                  <h5>Fill the form on this page</h5>
                </div>
                <div className="text text-2 active">
                  <h5>You get an Eden plan for your team</h5>
                </div>
                <div className="text text-3 active">
                  <h5>We'll set up your team's accounts</h5>
                </div>
                <div className="text text-4 active">
                  <h5>Every team member gets personalized service</h5>
                </div>

                <div className="text text-5 active">
                  <h5>You monitor/evaluate team satisfaction.</h5>
                </div>
              </div>
            </div>
          </div>
          <a href="#getStarted" className="btn" id="getStarted">
            Get Eden
          </a>
        </div>
      </section>
    </>
  );
}

export default CompanyDescription;
