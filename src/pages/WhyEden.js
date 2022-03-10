import React, { useState } from "react";
import WhyEdenCustomers from "../whyEdenComponents/WhyEdenCustomers";
import WhyEdenHero from "../whyEdenComponents/WhyEdenHero";
import WhyEdenPlan from "../whyEdenComponents/WhyEdenPlan";
import WhyEdenValues from "../whyEdenComponents/WhyEdenValues";
import WhyMore from "../whyEdenComponents/WhyMore";

function WhyEden({ isModal, setIsModal, debounceFn }) {
  const [isPromiseModal, setIsPromiseModal] = useState(false);

  const handlePromiseModal = () => {
    setIsPromiseModal(true);
  };
  const handleCancelModal = () => {
    setIsPromiseModal(false);
  };

  return (
    <div
      className={isPromiseModal ? "no-scroll" : ""}
      style={{ backgroundColor: "#fcfcfc" }}
    >
      <WhyEdenHero />
      <WhyMore />
      <WhyEdenValues
        isPromiseModal={isPromiseModal}
        handlePromiseModal={handlePromiseModal}
        handleCancelModal={handleCancelModal}
      />
      <WhyEdenCustomers />
      <WhyEdenPlan
        isModal={isModal}
        setIsModal={setIsModal}
        debounceFn={debounceFn}
      />
    </div>
  );
}

export default WhyEden;
