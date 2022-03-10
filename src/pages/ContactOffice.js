import React from "react";

import members from "../assets/eden-members_boutaf.png";

function ContactOffice() {
  return (
    <section className="contactOffice">
      <div className="contactOffice__content wrapper">
        <div className="contactOffice__address">
          <h5>Eden Office</h5>

          <p>
            Block C7 Unit 3, Jacob Mews Estate, Adebisi Street, Yaba, Lagos,
            Nigeria.
          </p>

          <div className="email">
            <p>Email: support@edenlife.ng </p>
            <p>Phone number: +234 814 675 7886</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&amp;query=Eden,+Adebisi+Street,+Lagos"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <div className="contactOffice__members">
          <img src={members} alt="eden-members" />
        </div>
      </div>
    </section>
  );
}

export default ContactOffice;
