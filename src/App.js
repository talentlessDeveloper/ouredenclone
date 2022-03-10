import React, { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Intercom from "./intercom/Intercom";
import IntercomModal from "./intercom/IntercomModal";
import LoadSpinner from "./utils/Loader";

import { edenHome } from "./components/homeHero";
import { edenOffers } from "./components/edenOffer";
import { edenFood } from "./edenFood/foodHero";
import { foodOffers } from "./edenFood/foodOffers";

import { QueryClientProvider, QueryClient } from "react-query";
import ScrollToTop from "./utils/ScrollToTop";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const WhyEden = lazy(() => import("./pages/WhyEden"));
const Companies = lazy(() => import("./pages/Companies"));
const Food = lazy(() => import("./pages/Food"));
const Laundry = lazy(() => import("./pages/Laundry"));
const Cleaning = lazy(() => import("./pages/Cleaning"));
const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  const [changeBg, setChangeBg] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [intercomModal, setIntercomModal] = useState(false);

  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }

  const debounced = debounce(function changeSectionBg() {
    if (window.innerWidth >= 899) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  }, 1200);

  const handleIntercom = () => {
    setIntercomModal((p) => !p);
  };

  // console.log(pathname);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div
          className="App"
          style={intercomModal ? { height: "100vh", overflowY: "hidden" } : {}}
        >
          <Header debounceFn={debounce} handleIntercom={handleIntercom} />
          <Suspense fallback={<LoadSpinner />}>
            <ScrollToTop>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <Home
                      debounced={debounced}
                      changeBg={changeBg}
                      isModal={isModal}
                      setIsModal={setIsModal}
                      eden={edenHome}
                      offers={edenOffers}
                      imgDisplay={true}
                    />
                  }
                ></Route>
                <Route
                  path="/eden_means_easy"
                  element={
                    <WhyEden
                      debounceFn={debounce}
                      isModal={isModal}
                      setIsModal={setIsModal}
                    />
                  }
                ></Route>
                <Route path="/companies" element={<Companies />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route
                  path="/food"
                  element={<Food eden={edenFood} offers={foodOffers} />}
                ></Route>
                <Route path="/laundry" element={<Laundry />}></Route>
                <Route path="/cleaning" element={<Cleaning />}></Route>
                <Route
                  path="/contact_us"
                  element={<ContactPage handleIntercom={handleIntercom} />}
                ></Route>
              </Routes>
            </ScrollToTop>
          </Suspense>

          {intercomModal ? (
            <IntercomModal handleIntercom={handleIntercom} />
          ) : null}
          <Intercom
            intercomModal={intercomModal}
            handleIntercom={handleIntercom}
          />
          <Footer debounced={debounced} changeBg={changeBg} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

//  <QueryClientProvider client={queryClient}>
//    <Header debounceFn={debounce} />

//    <Routes>
//      <Route
//        path="/"
//        exact
//        element={<Home debounced={debounced} changeBg={changeBg} />}
//      ></Route>
//      <Route path="/eden_means_easy" element={<WhyEden />}></Route>
//      <Route path="/companies" element={<Companies />}></Route>
//      <Route path="/pricing" element={<Pricing />}></Route>
//    </Routes>
//    <Footer debounced={debounced} changeBg={changeBg} />
//  </QueryClientProvider>;
