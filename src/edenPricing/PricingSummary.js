import React, { useEffect, useState } from "react";
import { foodPackage } from "./foodPackage";
import { laundryPackage } from "./laundryPackage";
import { cleaningPackage } from "./cleaningPackage";

function PricingSummary({ budget }) {
  const formatBudget = Intl.NumberFormat("en-US");
  const [foodSummary, setFoodSummary] = useState([]);
  const [laundrySummary, setLaundrySummary] = useState([]);
  const [cleaningSummary, setCleaningSumary] = useState([]);
  const [price, setPrice] = useState({
    food: 11000,
    laundry: 13500,
    cleaning: 10000,
  });
  // const [total, setTotal] = useState(0);

  let total = formatBudget.format(price.food + price.laundry + price.cleaning);

  useEffect(() => {
    if (budget === 25000) {
      setFoodSummary(foodPackage[0]);
      setLaundrySummary(laundryPackage[0]);
      setPrice({
        food: 11000,
        laundry: 13500,
        cleaning: 0,
      });
    } else if (budget === 60000) {
      setFoodSummary(foodPackage[1]);
      setLaundrySummary(laundryPackage[1]);
      setCleaningSumary(cleaningPackage[0]);
      setPrice({
        food: 20000,
        laundry: 24000,
        cleaning: 10000,
      });
    } else if (budget === 100000) {
      setFoodSummary(foodPackage[2]);
      setLaundrySummary(laundryPackage[1]);
      setCleaningSumary(cleaningPackage[1]);
      setPrice({
        food: 55000,
        laundry: 24000,
        cleaning: 20000,
      });
    } else if (budget === 150000) {
      setFoodSummary(foodPackage[3]);
      setLaundrySummary(laundryPackage[2]);
      setCleaningSumary(cleaningPackage[2]);
      setPrice({
        food: 58000,
        laundry: 48000,
        cleaning: 20000,
      });
    } else {
      setFoodSummary(foodPackage[3]);
      setLaundrySummary(laundryPackage[0]);
      setCleaningSumary([]);
      setPrice({
        food: 0,
        laundry: 13500,
        cleaning: 0,
      });
    }
  }, [budget]);

  return (
    <>
      <div className="pricing__plan">
        <div className="pricing__plan-title">
          <p>
            For <span>₦{formatBudget.format(budget)}</span> you can get
          </p>
        </div>

        <ul className={budget >= 25000 ? "" : "hide"}>
          <p>
            <span>Food Plan</span>
            <span>₦{formatBudget.format(price.food)}</span>
          </p>

          {foodSummary.map((summary, idx) => {
            return <li key={`${idx}-foodSummary`}>{summary}</li>;
          })}
        </ul>

        <ul>
          <p>
            <span>Laundry Plan</span>
            <span>₦{formatBudget.format(price.laundry)}</span>
          </p>

          {laundrySummary.map((summary, idx) => {
            return <li key={`${idx}-laundrySummary`}>{summary}</li>;
          })}
        </ul>

        <ul className={budget <= 25000 ? "hide" : "cleaning-lists"}>
          <p>
            <span>
              Cleaning Plan <span>what will each cleaning entail?</span>
            </span>
            <span>₦{formatBudget.format(price.cleaning)}</span>
          </p>

          {cleaningSummary.map((summary, idx) => {
            return <li key={`${idx}-cleaningSummary`}>{summary}</li>;
          })}
        </ul>

        <p className="total">
          <span>Total</span>
          <span>₦{total}</span>
        </p>
        <div className="pricing__plan-reconfigure">
          <div className="configure">
            <p>Not what you want?</p>
            <button className="customise">Customise</button>
          </div>
          <button className="pricing__plan-btn">I Want an Easy life</button>
        </div>
      </div>
    </>
  );
}

export default PricingSummary;
