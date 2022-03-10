import React from "react";
import FoodDescription from "../edenFood/FoodDescription";
import cleaningDesc from "../assets/cleaningDesc.mp4";

function CleaningDescription() {
  const text2 = `Our team of trained cleaners visit your home, polishing surfaces, mopping floors, scrubbing dishes, and making sure your home looks pristine. `;

  const text3 = `In no time, our cleaners are done and you can relax in your clean home. Your weekends are now free for whatever your idea of fun is. `;
  return (
    <>
      <FoodDescription
        slideTitle2="We get scrubbin'"
        slideText2={text2}
        slideTitle3="You relax"
        slideText3={text3}
        videoDesc={cleaningDesc}
      />
    </>
  );
}

export default CleaningDescription;
