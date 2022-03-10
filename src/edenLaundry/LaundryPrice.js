import React, { useState } from "react";
import LaundryPlanDaily from "./LaundryPlanDaily";
import LaundryPlanWeekly from "./LaundryPlanWeekly";

function LaundryPrice() {
  const [laundryPlan, setLaundryPlan] = useState("fold");
  return (
    <>
      <ul className="price-lists">
        <li>
          <span
            className={laundryPlan === "fold" ? "active" : ""}
            onClick={() => {
              setLaundryPlan("fold");
            }}
          >
            Wash & Fold
          </span>
        </li>
        <li>
          <span
            className={laundryPlan === "iron" ? "active" : ""}
            onClick={() => {
              setLaundryPlan("iron");
            }}
          >
            Wash & Iron
          </span>
        </li>
      </ul>

      <div
        className={
          laundryPlan === "iron"
            ? "foodPlan__price--weekly active"
            : "foodPlan__price--weekly"
        }
      >
        <LaundryPlanWeekly />
      </div>

      <div
        className={
          laundryPlan === "fold"
            ? "foodPlan__price--daily active"
            : "foodPlan__price--daily"
        }
      >
        <LaundryPlanDaily />
      </div>
    </>
  );
}

export default LaundryPrice;
