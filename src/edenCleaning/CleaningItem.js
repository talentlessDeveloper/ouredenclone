import React from "react";

import CleaningExtra from "./CleaningExtra";
import CleaningSelect from "./CleaningSelect";

function CleaningItem({
  title,
  price,
  active,
  setActive,
  lists,
  roomIncrease,
  roomDecrease,

  ...room
}) {
  const formatPrice = Intl.NumberFormat("en-US");

  return (
    <>
      <CleaningExtra title={title} lists={lists} />

      <div className="home-input">
        <label htmlFor="home">Tell us about your home</label>

        <CleaningSelect
          roomIncrease={roomIncrease}
          roomDecrease={roomDecrease}
          {...room}
        />
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

export default CleaningItem;
