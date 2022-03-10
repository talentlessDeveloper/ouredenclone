import React from "react";

import { RiArrowLeftSLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaIntercom } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineGif } from "react-icons/ai";

function IntercomChat({ setModalPage }) {
  return (
    <>
      <div className="intercomModal__content chat-content">
        <div className="intercomModal__header">
          <div className="intercomModal__title">
            <div className="icon-cont">
              <RiArrowLeftSLine
                className="arrow"
                onClick={() => setModalPage("home")}
              />
            </div>
            <div className="text">
              <h2>Eden Life Inc</h2>
              <p>
                You're here because you deserve a good life and you know it. Ask
                me anything, or share some feedback.
              </p>

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
            </div>
          </div>
        </div>
        <div className="intercomModal__body">
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
          <div className="chat">
            <textarea
              placeholder="Send a message..."
              className="textarea"
            ></textarea>

            <div className="buttons">
              <AiOutlineGif />
              <BsEmojiSmile />
              <GrAttachment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntercomChat;
