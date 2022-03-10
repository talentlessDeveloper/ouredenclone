import React from "react";
import FoodPlan from "../edenFood/FoodPlan";

function LaundryPlans() {
  return (
    <>
      <FoodPlan
        title="The Laundry Plans"
        subtitle="Each laundry bag contains up to 30 clothing items, and you can track your order on the app."
        iconTitle1="We'll pick up and deliver"
        iconSubTitle1="in 48 hours."
        iconTitle2=" We'll replace damaged items."
        iconSubTitle2="No questions asked."
        iconTitle3="Pause Anytime"
        iconSubTitle3="On God!"
        plan="laundry"
      />
    </>
  );
}

export default LaundryPlans;
