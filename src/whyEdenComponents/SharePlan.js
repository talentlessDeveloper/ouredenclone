import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function SharePlan({ title }) {
  return (
    <>
      <div className="share--message">
        <p>{title}</p>
        <div className="share--icons">
          <a
            href="https://twitter.com/intent/tweet?text=https://ouredenlifev2-staging.netlify.app/eden_means_easy/"
            target="_blank"
            rel="noreferrer"
            className="share--icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://ouredenlifev2-staging.netlify.app/eden_means_easy/"
            target="_blank"
            rel="noreferrer"
            className="share--icon"
          >
            <FaFacebook />
          </a>
          <a
            href="whatsapp://send?text=https://ouredenlifev2-staging.netlify.app/eden_means_easy/"
            data-action="share/whatsapp/share"
            className="share--icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://ouredenlifev2-staging.netlify.app/eden_means_easy/"
            target="_blank"
            rel="noreferrer"
            className="share--icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default SharePlan;
