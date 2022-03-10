import React from "react";

function ContactUs({ handleIntercom }) {
  return (
    <section className="contactEden">
      <div className="contactEden__content wrapper">
        <header className="contactEden__header">
          <h1>Contact Us</h1>
          <p>
            Got a special request, need more information or you simply want to
            talk? Reach out to us and we'll respond as soon as possible.
          </p>
        </header>

        <div className="contactEden__inquiries">
          <div className="contactEden__inquiries-card press">
            <h3>📻</h3>
            <h5>Press Inquiries </h5>
            <p>
              For press inquiries, send us an email via the email address below.
            </p>
            <a href="mailto:press@edenlife.ng" target="_blank" rel="noreferrer">
              press@edenlife.ng
            </a>
          </div>
          <div className="contactEden__inquiries-card partner">
            <h3>🤝</h3>
            <h5> Partner Inquiries</h5>
            <p>
              For partner inquiries, send us an email via the email address
              below.
            </p>
            <a
              href="mailto:partner@edenlife.ng"
              target="_blank"
              rel="noreferrer"
            >
              partner@edenlife.ng
            </a>
          </div>
          <div className="contactEden__inquiries-card support">
            <h3>☎️</h3>
            <h5> Customer Support</h5>
            <p>
              For customer support, call{" "}
              <a href="tel:+2348146757886 ">+2348146757886 </a> or{" "}
              <span onClick={handleIntercom}>chat</span> with us.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.ouredenlife.app"
              target="_blank"
              rel="noreferrer"
            >
              Download the Eden App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
