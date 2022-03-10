import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

function Accordion({ title, content, index, isOpen, handleOpen }) {
  return (
    <div
      className={`${
        isOpen === index
          ? "question__description--item show"
          : "question__description--item"
      }`}
    >
      <div className="question__description--title">
        <h3>{title}</h3>
        <button className="question__btn" onClick={() => handleOpen(index)}>
          {isOpen !== index ? <BsPlusCircle /> : <BiMinusCircle />}
        </button>
      </div>
      <div className={isOpen === index ? "content show" : "content"}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
