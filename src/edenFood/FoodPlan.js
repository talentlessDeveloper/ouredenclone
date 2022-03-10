import React from "react";
import CleaningPrice from "../edenCleaning/CleaningPrice";
import LaundryPrice from "../edenLaundry/LaundryPrice";
import FoodPrice from "./FoodPrice";

function FoodPlan({
  title,
  subtitle,
  iconTitle1,
  iconSubTitle1,
  iconTitle2,
  iconSubTitle2,
  iconTitle3,
  iconSubTitle3,

  plan,
}) {
  return (
    <section className="foodPlan" id="plan">
      <div className="foodPlan__content wrapper">
        <div className="foodPlan__title">
          <h3>{title}:</h3>
          <p>{subtitle}</p>
          <ul>
            <li>
              <h5 className="icon icon--one">👀</h5>
              <div className="icon--text">
                <h5>{iconTitle1}</h5>
                <p>{iconSubTitle1}</p>
              </div>
            </li>
            <li>
              <h5 className="icon icon--two">🚛</h5>
              <div className="icon--text">
                <h5>{iconTitle2}</h5>
                <p>{iconSubTitle2}</p>
              </div>
            </li>
            <li>
              <h5 className="icon icon--three">👼</h5>
              <div className="icon--text">
                <h5>{iconTitle3}</h5>
                <p>{iconSubTitle3}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="foodPlan__price">
          {plan === "food" ? (
            <FoodPrice />
          ) : plan === "laundry" ? (
            <LaundryPrice />
          ) : (
            <CleaningPrice />
          )}
        </div>
      </div>
    </section>
  );
}

export default FoodPlan;
