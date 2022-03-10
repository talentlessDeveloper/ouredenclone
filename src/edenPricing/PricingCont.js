import React, { useRef, useState } from "react";
import PricingForm from "./PricingForm";
import PricingSummary from "./PricingSummary";

function PricingCont() {
  const [service, setService] = useState({
    food: true,
    laundry: true,
    cleaning: true,
  });
  const [budget, setBudget] = useState(25000);
  const [range, setRange] = useState(1);
  const rangeRef = useRef();

  const handleRange = () => {
    setRange(rangeRef.current.value);
  };

  const handleCheck = (e) => {
    if (e.target.value === "food") {
      setService({
        ...service,
        food: !service.food,
      });
    } else if (e.target.value === "laundry") {
      setService({
        ...service,
        laundry: !service.laundry,
      });
    } else if (e.target.value === "cleaning") {
      setService({
        ...service,
        cleaning: !service.cleaning,
      });
    }
  };

  console.log(window.scrollY);

  return (
    <section className="pricing">
      <div className="pricing__content wrapper">
        <div className="pricing__form-container">
          <PricingForm
            handleCheck={handleCheck}
            handleRange={handleRange}
            rangeRef={rangeRef}
            range={range}
            budget={budget}
            setBudget={setBudget}
            setService={setService}
            {...service}
          />
        </div>
        <div className="pricing__summary">
          <PricingSummary budget={budget} />
        </div>
      </div>
    </section>
  );
}

export default PricingCont;
