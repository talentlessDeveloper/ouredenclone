import React from "react";

function ContactHover({ handleIntercom }) {
  return (
    <>
      <div className="header__hover contact--hover">
        <div className="header__hover--text">
          <h3>Get Help</h3>
          <p>Call or send us a message and we'll respond soonest.</p>
        </div>

        <ul className="header__hover--contact">
          <li>
            <a href="tel:+2348146757886">+2348146757886</a>
          </li>
          <li>
            <div className="chat" onClick={handleIntercom}>
              Chat
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactHover;
