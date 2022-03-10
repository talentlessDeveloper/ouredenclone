import React from "react";
import Hero from "../components/Hero";
import phone from "../assets/hero-food-bg1_yjfvcb.svg";
import { edenLaundry } from "./laundryHero";
import { heroOffers } from "./heroOffers";

function HeroLaundry() {
  return (
    <div className="laundryHero heroPage">
      <Hero
        eden={edenLaundry}
        offers={heroOffers}
        heroPhone={phone}
        titleUp={"Save your"}
        titleDown={"<br /> Fresh Laundry, in 48hrs"}
        cta={"Pick Up My Laundry"}
      />
    </div>
  );
}

export default HeroLaundry;
