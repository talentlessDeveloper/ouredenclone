import React, { useState } from "react";
import IntercomChat from "./IntercomChat";

import IntercomHome from "./IntercomHome";
import { MdOutlineCancel } from "react-icons/md";

function IntercomModal({ handleIntercom }) {
  const [modalPage, setModalPage] = useState("chat");
  return (
    <div
      className={
        modalPage === "chat" ? "intercomModal chat-room" : "intercomModal home"
      }
    >
      <IntercomHome setModalPage={setModalPage} />
      <IntercomChat setModalPage={setModalPage} />
      <button className="cancel-btn" onClick={handleIntercom}>
        <MdOutlineCancel />
      </button>
    </div>
  );
}

export default IntercomModal;
