import React, { useState, useRef, useEffect, useCallback } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import parser from "html-react-parser";

function FoodPlanWeekly() {
  const [noOfMeals, setNoOfMeals] = useState(5);
  const [price, setPrice] = useState(47500);
  const [money, setMoney] = useState(9500);
  const [delivery, setDelivery] = useState(1);

  const inputRef = useRef();
  const formatPrice = Intl.NumberFormat("en-US");

  const handleIncrease = () => {
    // const value = inputRef.current.value;

    setNoOfMeals((meals) => meals + 1);
    changePrice(money);
  };

  const changePrice = useCallback(() => {
    if (noOfMeals === 1) {
      setMoney(11000);
      setDelivery(1);
    } else if (noOfMeals > 1 && noOfMeals <= 3) setMoney(10000);
    else if (noOfMeals >= 4 && noOfMeals <= 5) setMoney(9500);
    else if (noOfMeals >= 6 && noOfMeals <= 9) setMoney(9000);
    else if (noOfMeals >= 10 && noOfMeals <= 13) setMoney(8000);
    else if (noOfMeals >= 14 && noOfMeals <= 19) setMoney(7760);
    else {
      setMoney(7500);
    }

    return noOfMeals * money * delivery;
  }, [noOfMeals, money, delivery]);

  const handleDecrease = () => {
    setNoOfMeals((meals) => (meals > 1 ? meals - 1 : 1));
    changePrice();
  };

  const deliveryIncrease = () => {
    setDelivery((delivery) =>
      delivery >= 2 ? 2 : noOfMeals === 1 ? 1 : delivery + 1
    );
  };

  const deliveryDecrease = () => {
    setDelivery((delivery) => (delivery <= 1 ? 1 : delivery - 1));
  };

  useEffect(() => {
    setPrice(changePrice());
  }, [money, changePrice]);

  return (
    <>
      <div className="foodPlan__item weekly1">
        <p>Number of meals per delivery?</p>
        <div className="btn--group">
          <button className="btn--minus btn" onClick={handleDecrease}>
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            value={noOfMeals}
            min={1}
            ref={inputRef}
            readOnly
          />
          <button className="btn--plus btn" onClick={handleIncrease}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="foodPlan__item weekly2">
        <p className="p2">Should we deliver all once or twice weekly?</p>
        <div className="btn--group">
          <button className="btn--minus btn" onClick={deliveryDecrease}>
            <AiOutlineMinus />
          </button>
          <input type="number" value={delivery} readOnly />
          <button className="btn--plus btn" onClick={deliveryIncrease}>
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

export default FoodPlanWeekly;
