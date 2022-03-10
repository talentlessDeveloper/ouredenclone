import React from "react";
import { rice } from "./rice";
import { brunch } from "./brunch";
import { beans } from "./beans";
import { swallow } from "./swallow";
import { plantain } from "./plantain";
import { salad } from "./salad";
import { potato } from "./potato";
import { juice } from "./juice";
import { smoothie } from "./smoothie";

function FoodGallery({ current }) {
  let types;
  switch (current) {
    case 0:
      types = rice;
      break;
    case 1:
      types = brunch;
      break;
    case 2:
      types = beans;
      break;
    case 3:
      types = swallow;
      break;
    case 4:
      types = plantain;
      break;
    case 5:
      types = salad;
      break;
    case 7:
      types = potato;
      break;
    case 8:
      types = juice;
      break;
    case 9:
      types = smoothie;
      break;

    default:
      types = rice;
  }
  // if (current === 0) {
  //   types = rice;
  // }
  return (
    <>
      {types.map((type, index) => {
        return (
          <figure key={index}>
            <div
              className="foodMenu__list-img"
              style={{ background: `${type.background}` }}
            >
              <img
                src={type.image}
                alt={type.alt}
                loading="lazy"
                width={400}
                height={350}
              />
            </div>
            <figcaption>
              <p>{type.caption}</p>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}

export default FoodGallery;
