import React, { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FoodDate from "./FoodDate";
import FoodGallery from "./FoodGallery";
import FoodTypes from "./FoodTypes";

function FoodMenu() {
  const [current, setCurrent] = useState(0);

  const types = [
    "Rice/grains",
    "brunch",
    "beans",
    "swallow",
    "plantain",
    "salad",
    "daily",
    "potato",
    "juices",
    "smoothies",
  ];

  const typeRef = useRef();
  const itemRef = useRef();
  const length = types.length;
  // let slideW = 100;

  const handleTypeMobile = () => {
    setCurrent((current) => (current === length - 1 ? length : current + 1));
    typeRef.current.style.transform = `translateX(-${(current + 1) * 100}%)`;
  };

  const handleType = () => {
    setCurrent((current) => (current >= 3 ? 4 : current + 1));

    typeRef.current.style.transform = `translateX(-${(current + 1) * 12}%)`;
    console.log(current);
  };

  const handleTypeLeft = () => {
    if (window.innerWidth < 760) {
      setCurrent((current) => (current === 0 ? 0 : current - 1));
      typeRef.current.style.transform = `translateX(-${(current - 1) * 100}%)`;
    } else {
      setCurrent((current) => (current === 0 ? 0 : current - 1));
      typeRef.current.style.transform = `translateX(-${(current - 1) * 12}%)`;
      console.log(current);
    }
  };

  return (
    <section className="foodMenu" id="plan">
      <div className="foodMenu__content wrapper">
        <div className="foodMenu__title">
          <h3>Current Menu</h3>
          <FoodDate />
        </div>

        <div className="foodMenu__carousel">
          <FoodTypes
            typeRef={typeRef}
            types={types}
            itemRef={itemRef}
            current={current}
            setCurrent={setCurrent}
          />

          <div className="arrowbtns mobile">
            <button
              className={
                current === length - 1
                  ? "hide"
                  : "typearrowBtn typearrowRight mobile"
              }
              onClick={handleTypeMobile}
            >
              <MdKeyboardArrowRight />
            </button>
            <button
              className={
                current >= 3 ? "hide" : "typearrowBtn typearrowRight desktop"
              }
              onClick={handleType}
            >
              <MdKeyboardArrowRight />
            </button>
            <button
              className={current === 0 ? "hide" : "typearrowBtn typearrowLeft"}
              onClick={handleTypeLeft}
            >
              <MdKeyboardArrowLeft />
            </button>
          </div>

          <div className="foodMenu__grid">
            <FoodGallery current={current} />
          </div>

          <div className="cta-container">
            <a className="foodMenu__cta" href="#getStarted">
              I Want A Meal Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
