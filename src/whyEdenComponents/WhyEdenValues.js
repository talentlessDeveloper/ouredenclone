import React from "react";

import PromiseModal from "./PromiseModal";
import WhyEdenCards from "./WhyEdenCards";
import { cardContents } from "./cardContents";

function WhyEdenValues({
  isPromiseModal,
  handlePromiseModal,
  handleCancelModal,
}) {
  return (
    <section className="whyEdenValue">
      <div className="values wrapper">
        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[0].header}
            title={cardContents[0].title}
            image={cardContents[0].image}
            background={cardContents[0].background}
            description={cardContents[0].description}
            className={cardContents[0].className}
            handlePromiseModal={handlePromiseModal}
          />
        </div>

        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[1].header}
            title={cardContents[1].title}
            image={cardContents[1].image}
            background={cardContents[1].background}
            description={cardContents[1].description}
            className={cardContents[1].className}
          />
          <WhyEdenCards
            header={cardContents[2].header}
            title={cardContents[2].title}
            image={cardContents[2].image}
            background={cardContents[2].background}
            description={cardContents[2].description}
            className={cardContents[2].className}
            video={true}
            downloadBtn={true}
          />
        </div>

        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[3].header}
            title={cardContents[3].title}
            image={cardContents[3].image}
            background={cardContents[3].background}
            description={cardContents[3].description}
            className={cardContents[3].className}
          />
          <WhyEdenCards
            header={cardContents[4].header}
            title={cardContents[4].title}
            image={cardContents[4].image}
            background={cardContents[4].background}
            description={cardContents[4].description}
            className={cardContents[4].className}
          />
        </div>

        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[5].header}
            title={cardContents[5].title}
            image={cardContents[5].image}
            background={cardContents[5].background}
            description={cardContents[5].description}
            className={cardContents[5].className}
          />
        </div>

        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[6].header}
            title={cardContents[6].title}
            image={cardContents[6].image}
            background={cardContents[6].background}
            description={cardContents[6].description}
            className={cardContents[6].className}
          />
          <WhyEdenCards
            header={cardContents[7].header}
            title={cardContents[7].title}
            image={cardContents[7].image}
            background={cardContents[7].background}
            description={cardContents[7].description}
            className={cardContents[7].className}
          />
        </div>
        <div className="card--grid">
          <WhyEdenCards
            header={cardContents[8].header}
            title={cardContents[8].title}
            image={cardContents[8].image}
            background={cardContents[8].background}
            description={cardContents[8].description}
            className={cardContents[8].className}
            video={true}
          />
          <WhyEdenCards
            header={cardContents[9].header}
            title={cardContents[9].title}
            image={cardContents[9].image}
            background={cardContents[9].background}
            description={cardContents[9].description}
            className={cardContents[9].className}
          />
        </div>
      </div>

      {isPromiseModal ? (
        <PromiseModal handleCancelModal={handleCancelModal} />
      ) : null}
    </section>
  );
}

export default WhyEdenValues;
