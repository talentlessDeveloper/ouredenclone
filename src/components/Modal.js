import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
// import { BsFileEarmarkX } from "react-icons/bs";

import { MdOutlineCancel } from "react-icons/md";

function Modal({ handleCancelModal }) {
  return (
    <div className="modal">
      <button className="modal__cancel btn" onClick={handleCancelModal}>
        <MdOutlineCancel />
      </button>

      <div className="modal__status">
        <BsFileEarmarkText className="status-icon icon-success" />
      </div>

      <h4 className="modal__status--title">Information Submitted</h4>

      <p className="modal__status--message">
        You have successfully submitted your information
      </p>

      <button className="modal__btn btn" onClick={handleCancelModal}>
        Continue Browsing
      </button>
    </div>
  );
}

export default Modal;
