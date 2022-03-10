import React from "react";
import Hero from "../components/Hero";
import phone from "../assets/hero-food-bg1_yjfvcb.svg";
import { edenCleaning } from "./cleaningHero";
import { cleaningOffers } from "./cleaningOffers";

function HeroCleaning() {
  return (
    <div className="cleaningHero heroPage">
      <Hero
        eden={edenCleaning}
        offers={cleaningOffers}
        heroPhone={phone}
        titleUp={"Spend your energy on"}
        titleDown={`<br /> <small>Our team of professional cleaners:</small> `}
        cta={"I Want A Clean Home"}
      />
    </div>
  );
}

export default HeroCleaning;
