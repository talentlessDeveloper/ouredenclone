import React from "react";
import Hero from "../components/Hero";
import foodPhone from "../assets/hero-food-bg1_yjfvcb.svg";

function HeroFood({ eden, offers }) {
  return (
    <div className="foodHero heroPage">
      <Hero
        eden={eden}
        offers={offers}
        heroPhone={foodPhone}
        titleUp={"Enjoy"}
        titleDown={"<br /> ready in 5 minutes "}
        cta={"I Want A Meal Plan"}
      />
    </div>
  );
}

export default HeroFood;
