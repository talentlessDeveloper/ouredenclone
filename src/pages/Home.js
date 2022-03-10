import React from "react";

import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../utils/ErrorBoundary";
import heroPhone from "../assets/hero-phone_hmfvpb.svg";
import Hero from "../components/Hero";
import LoadSpinner from "../utils/Loader";

const Customers = lazy(() => import("../components/Customers"));

const Press = lazy(() => import("../components/Press"));
const Services = lazy(() => import("../components/Services"));
const Video = lazy(() => import("../components/Video"));
const Waiting = lazy(() => import("../components/Waiting"));

function Bomb() {
  throw new Error("💥 KABOOM 💥");
}

function Home({
  debounced,
  changeBg,
  isModal,
  setIsModal,
  eden,
  offers,
  imgDisplay,
}) {
  const [explode, setExplode] = React.useState(false);
  return (
    <div className="home">
      <Hero
        debounced={debounced}
        changeBg={changeBg}
        eden={eden}
        offers={offers}
        imgDisplay={imgDisplay}
        heroPhone={heroPhone}
        titleUp={"Say goodbye to <br />"}
        titleDown={"<br /> forever"}
        cta={"I Want An Easy Life"}
      />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        <Suspense
          fallback={
            <div>
              <LoadSpinner />
            </div>
          }
        >
          {explode ? <Bomb /> : null}
          <Services
            title="Services"
            subtitle="Convenience you can always depend on"
          />
          <Video debounced={debounced} changeBg={changeBg} />
          <Customers title={"The wall of 💚"} />
          <Waiting
            debounced={debounced}
            changeBg={changeBg}
            isModal={isModal}
            setIsModal={setIsModal}
          />
          <Press />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Home;
