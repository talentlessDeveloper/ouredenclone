import React from "react";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import HeroFood from "../edenFood/HeroFood";
import foodDesc from "../assets/foodDesc.mp4";
import LoadSpinner from "../utils/Loader";
import ErrorFallback from "../utils/ErrorBoundary";

const Services = lazy(() => import("../components/Services"));
const FoodCustomers = lazy(() => import("../edenFood/FoodCustomers"));
const FoodDescription = lazy(() => import("../edenFood/FoodDescription"));
const FoodMenu = lazy(() => import("../edenFood/FoodMenu"));
const FoodPlan = lazy(() => import("../edenFood/FoodPlan"));

function Food({ eden, offers }) {
  const title2 = `We Cook and Deliver`;
  const text2 = `We cook up your picks from our rich menu and deliver them to
                  you on schedule. At no extra delivery costs.`;

  const title3 = `You Heat and Eat`;

  const text3 = `It's ready to eat in 5 minutes. Or you can refrigerate for
                  later!`;
  return (
    <div>
      <HeroFood eden={eden} offers={offers} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadSpinner />}>
          <FoodDescription
            slideTitle2={title2}
            slideText2={text2}
            slideTitle3={title3}
            slideText3={text3}
            videoDesc={foodDesc}
          />
          <FoodMenu />
          <FoodCustomers />
          <FoodPlan
            title="The Food Plan"
            subtitle="Enjoy all the deliciousness of healthy food, right on time, with
            none of the stress"
            iconTitle1="Save Time"
            iconSubTitle1="Up to 14 hours every week"
            iconSubTitle2="No hidden deliveries"
            iconTitle2="One Monthly Payment"
            iconSubTitle3="Out of town? You can skip a service"
            iconTitle3="Pause Anytime"
            plan="food"
          />
          <Services
            type="food"
            title="Want more?"
            subtitle="Take a look at our other services"
            padding={true}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Food;
