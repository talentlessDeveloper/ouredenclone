import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function LaundryExtra() {
  const [expand, setExpand] = useState(false);
  return (
    <div className="extra">
      <div className="extra-title">
        <h5>Items that will cost you extra</h5>
        <button
          className="btn-expand extra-btn"
          onClick={() => setExpand((b) => !b)}
        >
          {!expand ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
        </button>
      </div>

      <ul className={!expand ? "hide" : "extra-description"}>
        <li>
          <span>Extra item </span>
          <span>₦ 250</span>
        </li>
        <li>
          <span>Big size towel (2 items) </span>
          <span>₦ 500</span>
        </li>
        <li>
          <span>Bedsheet (3 items) </span>
          <span>₦ 750</span>
        </li>
        <li>
          <span>Blanket (3 items)</span>
          <span>₦ 750</span>
        </li>
        <li>
          <span> 3 piece Agbada (5 items)</span>
          <span>₦ 1500</span>
        </li>
        <li>
          <span>Curtain (8 items)</span>
          <span>₦ 2000</span>
        </li>
        <li>
          <span>Duvet (10 items)</span>
          <span>₦ 2500</span>
        </li>
        <li>
          <span>A pair of suit (10 items)</span>
          <span>₦ 2500</span>
        </li>
      </ul>
    </div>
  );
}

export default LaundryExtra;
