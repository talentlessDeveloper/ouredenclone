import React, { useCallback, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import parser from "html-react-parser";

function FoodPlanDaily() {
  const [noOfMeals, setNoOfMeals] = useState(1);
  const [price, setPrice] = useState(55000);
  const [money, setMoney] = useState(55000);
  const formatPrice = Intl.NumberFormat("en-US");

  const handleIncrease = () => {
    setNoOfMeals((meals) => meals + 1);
    changePrice();
  };

  const handleDecrease = () => {
    setNoOfMeals((meals) => (meals <= 1 ? 1 : meals - 1));
    changePrice();
  };

  const changePrice = useCallback(() => {
    if (noOfMeals === 1) setMoney(55000);
    else {
      setMoney(50000);
    }

    return noOfMeals * money;
  }, [noOfMeals, money]);

  useEffect(() => {
    setPrice(changePrice());
  }, [money, changePrice]);

  return (
    <>
      <div className="foodPlan__item daily">
        <p>How many meals do you want daily?</p>
        <div className="btn--group">
          <button className="btn--minus btn" onClick={handleDecrease}>
            <AiOutlineMinus />
          </button>
          <input type="number" value={noOfMeals} readOnly />
          <button className="btn--plus btn" onClick={handleIncrease}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="foodPlan__bottom">
        <h5>
          <span>Price</span>
          <span>👉</span>
          NGN {parser(formatPrice.format(price))}.00
        </h5>
        <p>Monthly</p>
      </div>
    </>
  );
}

export default FoodPlanDaily;
