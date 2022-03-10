import React from "react";
import Customers from "../components/Customers";

function CompanyCustomer() {
  return (
    <div className="companyCustomer">
      <Customers title={"The wall of 💚"} />
      <button className="customer-perk">Get the Perfect Perk</button>
    </div>
  );
}

export default CompanyCustomer;
