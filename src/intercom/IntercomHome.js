import React from "react";
import eden from "../assets/eden-logo.svg";
import { FaIntercom } from "react-icons/fa";
import { IoMdPaperPlane, IoMdTime } from "react-icons/io";

function IntercomHome({ setModalPage }) {
  return (
    <>
      <div className="intercomModal__content home-content">
        <div className="intercomModal__header">
          <div className="home-title">
            <img src={eden} alt="logo" />
          </div>

          <div className="text">
            <h2>Hi There 👋 </h2>
            <p>
              You're here because you deserve a good life and you know it. Ask
              me anything, or share some feedback.
            </p>
          </div>
        </div>

        <div className="intercomModal__body">
          <div className="home-box">
            <h4>Start a converstion</h4>
            <div className="subtext">
              <div
                className="left"
                role="img"
                aria-label="Eve profile"
                title="Eve"
              >
                E
              </div>
              <div className="right">
                <p>Our usual reply time</p>
                <div className="small">
                  <IoMdTime />
                  <p>A few minutes</p>
                </div>
              </div>
            </div>
            <button onClick={() => setModalPage("chat")}>
              <IoMdPaperPlane />
              <span>Send a message</span>
            </button>
          </div>
          <div className="conversation">
            <div className="conversation-main"></div>
          </div>
          <div className="link">
            <a
              href="https://www.intercom.com/intercom-link?user_id=61c595b6103a9ca75b515d93&powered_by_app_id=s0gimx8q&company=Eden%20Life%20Inc&solution=live-chat&utm_content=4+conversation+we-run-on-intercom&utm_source=desktop-web&utm_medium=messenger&utm_campaign=intercom-link&utm_referrer=https://ouredenlife.com/eden_means_easy/"
              target="_blank"
              rel="noreferrer"
            >
              <FaIntercom />
              <span>We run on Intercom</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntercomHome;
