import React from "react";
import FoodDescription from "../edenFood/FoodDescription";

import laundryDesc from "../assets/laundryDesc.mp4";

function LaundryDescription() {
  const text2 = `We pick up your dirty clothes and beddings. Our professional laundry partners wash, dry-clean, and iron all your clothing items`;

  const text3 = `We QC and make sure all your clothes are intact and perfectly laundered. And that's it! Your clothes are on their way to you. All within 48 hours. `;
  return (
    <>
      <FoodDescription
        slideTitle2="We Pickup and Execute"
        slideText2={text2}
        slideTitle3="We Deliver"
        slideText3={text3}
        videoDesc={laundryDesc}
      />
    </>
  );
}

export default LaundryDescription;
