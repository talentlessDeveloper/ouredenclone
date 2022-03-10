import React from "react";
import Hero from "../components/Hero";
import phone from "../assets/hero-food-bg1_yjfvcb.svg";

import { edenCompanies } from "./companiesEden";

function HeroCompanies() {
  return (
    <div className="heroPage companies">
      <Hero
        eden={edenCompanies}
        heroPhone={phone}
        offers={[]}
        titleUp={"The perfect <br /> perk for"}
        titleDown={`<br /> <p>CEO, Hiring Manager or Team Lead? Eden is the best way to reward your team's good work while staying on budget.</p>`}
        cta={"Eden"}
      />
    </div>
  );
}

export default HeroCompanies;
