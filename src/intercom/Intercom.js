import React from "react";
import "./intercom.scss";
import { FiMessageSquare } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

function Intercom({ intercomModal, handleIntercom }) {
  return (
    <div className="intercom">
      <button onClick={handleIntercom}>
        <FiMessageSquare className={!intercomModal ? "" : "not-visible"} />
        <RiArrowDownSLine className={intercomModal ? "" : "not-visible"} />
      </button>
    </div>
  );
}

export default Intercom;
