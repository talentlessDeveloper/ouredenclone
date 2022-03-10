import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import SharePlan from "./SharePlan";

function PromiseModal({ handleCancelModal }) {
  return (
    <div className="promiseModal--container">
      <div className="promiseModal">
        <button
          className="promiseModal__cancel btn"
          onClick={handleCancelModal}
        >
          <MdOutlineCancel />
        </button>
        <h3 className="promiseModal__header">We Are Promise Keepers</h3>
        <div className="promiseModal__message">
          <p>
            Since starting Eden in 2019, we've been driven by a singular
            purpose: <br />
            <span>Make the quality of life 10 times better.</span> As CEO and a
            customer who depends on Eden to make my personal life better, I
            promise to make sure that you get the best service, and that we
            continue to improve on it, relentlessly.
          </p>
          <h5> - Nadayar Enegesi </h5>
          <SharePlan title={"Share Nad's Promise :"} />
        </div>
        <ImQuotesLeft className="quote--icon" />
      </div>
    </div>
  );
}

export default PromiseModal;
