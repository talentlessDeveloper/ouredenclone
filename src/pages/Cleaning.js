import React from "react";
import Services from "../components/Services";
import CleaningCustomers from "../edenCleaning/CleaningCustomers";
import CleaningDescription from "../edenCleaning/CleaningDescription";
import CleaningPlan from "../edenCleaning/CleaningPlan";
import HeroCleaning from "../edenCleaning/HeroCleaning";

function Cleaning() {
  return (
    <div>
      <HeroCleaning />
      <CleaningDescription />
      <CleaningCustomers />
      <CleaningPlan />
      <Services
        type="cleaning"
        title="Want more?"
        subtitle="Take a look at our other services"
        padding={true}
      />
    </div>
  );
}

export default Cleaning;
