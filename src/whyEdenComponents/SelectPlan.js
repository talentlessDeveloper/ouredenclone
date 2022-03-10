import React from "react";

function SelectPlan({ plan, setPlan }) {
  return (
    <>
      <ul className="selectPlan">
        <li
          className={plan === "individual" ? "active" : ""}
          onClick={() => setPlan("individual")}
        >
          Individual
        </li>
        <li
          className={plan === "team" ? "active" : ""}
          onClick={() => setPlan("team")}
        >
          Team
        </li>
      </ul>
    </>
  );
}

export default SelectPlan;
