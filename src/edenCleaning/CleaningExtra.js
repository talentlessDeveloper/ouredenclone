import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function CleaningExtra({ title, lists, cleaningPlan }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="extra extra-cleaning">
      <div className="extra-title">
        <h5>{title}</h5>
        <button
          className="btn-expand extra-btn"
          onClick={() => setExpand((b) => !b)}
        >
          {!expand ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
        </button>
      </div>
      <div
        className={
          cleaningPlan === "construction" && expand ? "extra-detail" : "hide"
        }
      >
        Post construction is the cleaning done to new or renovated buildings.
        This kind of cleaning is done to the whole of an apartment, house or
        facility from top to bottom.
      </div>
      <ul className={!expand ? "hide" : "extra-description"}>
        {lists.map((list, idx) => {
          return <li key={`detail${idx}`}>{list}</li>;
        })}
      </ul>
    </div>
  );
}

export default CleaningExtra;
