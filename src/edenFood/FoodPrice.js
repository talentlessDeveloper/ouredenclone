import React, { useState } from "react";
import FoodPlanDaily from "./FoodPlanDaily";
import FoodPlanWeekly from "./FoodPlanWeekly";

function FoodPrice() {
  const [foodPlan, setFoodPlan] = useState("weekly");
  return (
    <>
      <ul className="price-lists">
        <li>
          <span
            className={foodPlan === "daily" ? "active" : ""}
            onClick={() => {
              setFoodPlan("daily");
            }}
          >
            Daily
          </span>
        </li>
        <li>
          <span
            className={foodPlan === "weekly" ? "active" : ""}
            onClick={() => {
              setFoodPlan("weekly");
            }}
          >
            Weekly
          </span>
        </li>
      </ul>

      <div
        className={
          foodPlan === "weekly"
            ? "foodPlan__price--weekly active"
            : "foodPlan__price--weekly"
        }
      >
        <FoodPlanWeekly />
      </div>

      <div
        className={
          foodPlan === "daily"
            ? "foodPlan__price--daily active"
            : "foodPlan__price--daily"
        }
      >
        <FoodPlanDaily />
      </div>
    </>
  );
}

export default FoodPrice;
