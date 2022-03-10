import React from "react";
import LaundryExtra from "./LaundryExtra";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function LaundryItem({
  handleIncrease,
  handleDecrease,
  active,
  setActive,
  laundryBag,
  price,
}) {
  const formatPrice = Intl.NumberFormat("en-US");
  return (
    <>
      <div className="foodPlan__item daily">
        <LaundryExtra />

        <p>
          <span>Number of laundry bags</span>
          <span>Approx 30 items per bag</span>
        </p>

        <div className="btn--group">
          <button className="btn--minus btn" onClick={handleDecrease}>
            <AiOutlineMinus />
          </button>
          <input type="number" value={laundryBag} readOnly />
          <button className="btn--plus btn" onClick={handleIncrease}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <div className="foodPlan__item">
        <p>
          <span>Frequency</span>
        </p>
        <div className="btn--group">
          <button
            className={active === "once" ? "btn-freq active" : "btn-freq"}
            onClick={() => setActive("once")}
          >
            Once A Week
          </button>
          <button
            className={active === "twice" ? "btn-freq active" : "btn-freq"}
            onClick={() => setActive("twice")}
          >
            Every 2 weeks
          </button>
          <button
            className={active === "monthly" ? "btn-freq active" : "btn-freq"}
            onClick={() => setActive("monthly")}
          >
            Once A Month
          </button>
        </div>
      </div>

      <div className="foodPlan__bottom">
        <h5>
          <span>Price</span>
          <span>👉</span>
          NGN {formatPrice.format(price)}.00
        </h5>
        <p>Monthly</p>
      </div>
    </>
  );
}

export default LaundryItem;
