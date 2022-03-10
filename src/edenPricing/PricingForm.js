import React, { useCallback, useEffect } from "react";

function PricingForm({
  range,
  handleCheck,
  handleRange,
  rangeRef,
  budget,
  setBudget,
  setService,
  ...service
}) {
  const formatBudget = Intl.NumberFormat("en-US");

  const monthlyBudget = useCallback(() => {
    if (range < 1) {
      setBudget(15000);
    } else if (range > 0 && range < 2) {
      setBudget(25000);
    } else if (range > 1 && range < 3) {
      setBudget(60000);
    } else if (range > 2 && range < 4) {
      setBudget(100000);
    } else if (range > 3) {
      setBudget(150000);
    }
    return budget;
  }, [range, budget, setBudget]);

  useEffect(() => {
    monthlyBudget();
  }, [monthlyBudget]);

  return (
    <div className="pricing__form">
      <div className="pricing__form-title">
        <h2>Convenience and Quality on your Budget</h2>
        <p>
          Whatever plan you choose, our expert team is ready to lighten your
          load.
        </p>
      </div>
      <div className="pricing__form-slider">
        <div className="pricing__form-slider--title">
          <p>Choose Your Monthly Budget.</p>
          <h3>
            ₦
            {range > 4
              ? `${formatBudget.format(budget)} +`
              : formatBudget.format(budget)}
          </h3>
        </div>
        <div className="slider-range">
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            defaultValue={range}
            onChange={handleRange}
            ref={rangeRef}
          />
          <ul className="range-labels">
            <li className={range > 0 ? "active" : ""}>
              <span></span>
            </li>
            <li className={range > 1 ? "active" : ""}>
              <span></span>
            </li>
            <li className={range > 2 ? "active" : ""}>
              <span></span>
            </li>
            <li className={range > 3 ? "active" : ""}>
              <span></span>
            </li>
            <li className={range > 4 ? "active" : ""}>
              <span></span>
            </li>
            <li className={range > 4 ? "active" : ""}></li>
          </ul>
        </div>
      </div>
      <div className="pricing__form-input">
        <p>What service(s) are you interested in?</p>
        <ul>
          <li
            className={
              service.food ? "service-selected active" : "service-selected"
            }
          >
            <input
              type="checkbox"
              className="check"
              id="food"
              name="food"
              value="food"
              onClick={handleCheck}
            />
            <label htmlFor="food">Food</label>
          </li>
          <li
            className={
              service.laundry ? "service-selected active" : "service-selected"
            }
          >
            <input
              type="checkbox"
              className="check"
              id="laundry"
              name="laundry"
              value="laundry"
              onClick={handleCheck}
            />
            <label htmlFor="laundry">Laundry</label>
          </li>
          <li
            className={
              budget > 25000 && service.cleaning
                ? "service-selected active"
                : "service-selected"
            }
          >
            <input
              type="checkbox"
              className="check"
              id="cleaning"
              name="cleaning"
              value="cleaning"
              onClick={handleCheck}
            />
            <label htmlFor="cleaning">Cleaning</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PricingForm;
