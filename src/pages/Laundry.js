import React from "react";
import Services from "../components/Services";
import LaundryDescription from "../edenLaundry/LaundryDescription";
import HeroLaundry from "../edenLaundry/HeroLaundry";
import LaundryCustomers from "../edenLaundry/LaundryCustomers";
import LaundryPlans from "../edenLaundry/LaundryPlans";

function Laundry() {
  return (
    <div>
      <HeroLaundry />
      <LaundryDescription />
      <LaundryCustomers />
      <LaundryPlans />
      <Services
        type="laundry"
        title="Want more?"
        subtitle="Take a look at our other services"
        padding={true}
      />
    </div>
  );
}

export default Laundry;
