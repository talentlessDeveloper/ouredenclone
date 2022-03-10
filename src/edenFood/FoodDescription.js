import React, { useEffect, useRef, useState } from "react";

import { MdReplay } from "react-icons/md";

import { VscCircleFilled } from "react-icons/vsc";

function FoodDescription({
  slideTitle2,
  slideText2,
  slideTitle3,
  slideText3,
  videoDesc,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(false);
  const [activeSlide2, setActiveSlide2] = useState(false);
  const [activeSlide3, setActiveSlide3] = useState(false);
  const [isInterval, setIsInterval] = useState(true);

  const videoRef = useRef();
  const textRef = useRef();

  const handleReplay = () => {
    setIsPlaying((s) => !s);
    videoRef.current.play();
    setActiveSlide(false);
    setActiveSlide2(false);
    setActiveSlide3(false);
    setIsInterval(false);

    let reset = setTimeout(() => setIsInterval(true), 40000);

    return () => {
      clearTimeout(reset);
    };
  };

  useEffect(() => {
    let intervals;
    if (isInterval) {
      intervals = setInterval(() => {
        setIsPlaying((s) => !s);
        videoRef.current.play();
        setActiveSlide(false);
        setActiveSlide2(false);
        setActiveSlide3(false);
      }, 40000);
    }

    return () => {
      clearInterval(intervals);
    };
  }, [isInterval]);

  useEffect(() => {
    let firstTimer;
    if (activeSlide === false) {
      firstTimer = setTimeout(() => {
        setActiveSlide((s) => !s);
      }, 2500);
    }

    return () => {
      clearTimeout(firstTimer);
    };
  }, [activeSlide]);

  useEffect(() => {
    let secondTimer;
    if (activeSlide2 === false) {
      secondTimer = setTimeout(() => {
        setActiveSlide2((s) => !s);
        textRef.current.scrollLeft = 350;
      }, 11000);
    }

    return () => {
      clearTimeout(secondTimer);
    };
  }, [activeSlide2]);

  useEffect(() => {
    let timer;
    if (isPlaying && activeSlide3 === false) {
      timer = setTimeout(() => {
        setIsPlaying((s) => !s);
        setActiveSlide3((s) => !s);
        textRef.current.scrollLeft = 750;
      }, 27000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying, activeSlide3]);

  return (
    <section className="foodDescription description">
      <div className="description__content wrapper">
        <div className="description__title">
          <h3>How it works</h3>
        </div>

        <div className="description__body">
          <div
            className={
              !isPlaying
                ? "description__video-item visible"
                : "description__video-item"
            }
          >
            <video ref={videoRef} autoPlay>
              <source src={videoDesc} type="video/mp4" />
            </video>

            <button className="replay-button" onClick={handleReplay}>
              <MdReplay />
              <span>Replay Video</span>
            </button>
          </div>

          <div className="description__slider">
            <div className="description__slider-timeline">
              <VscCircleFilled />
              <div className="dash dash-1">
                <span></span>
              </div>

              <VscCircleFilled />
              <div className="dash dash-2">
                <span></span>
              </div>

              <VscCircleFilled />
            </div>

            <div className="description__slider-text" ref={textRef}>
              <div
                className={activeSlide ? "text text-1 active" : "text text-1"}
              >
                <h5>Choose your plan</h5>
                <p>
                  Sign up on the Eden app. Choose a meal schedule that works for
                  you; when you want it, how you want it. It takes less than 5
                  minutes.
                </p>
              </div>
              <div
                className={activeSlide2 ? "text text-2 active" : "text text-2"}
              >
                <h5>{slideTitle2}</h5>
                <p>{slideText2}</p>
              </div>
              <div
                className={activeSlide3 ? "text text-3 active" : "text text-3"}
              >
                <h5>{slideTitle3}</h5>
                <p>{slideText3}</p>
              </div>

              <a href="#getStarted" className="btn" id="getStarted">
                Get App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodDescription;
