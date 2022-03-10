import React from "react";
import futureImg from "../assets/future-africa.d9209b3.svg";
import dadaImg from "../assets/press2.aa8fb35.svg";
import cabalImg from "../assets/techcabal.67288ea.svg";
import pointImg from "../assets/techpoint.5d67bf9.svg";

function Press() {
  return (
    <section className="press">
      <div className="press__content wrapper">
        <div className="press__title">
          <h3>Check us out in the press</h3>
        </div>

        <div className="press__link">
          <a
            href="https://www.future.africa/home/eden"
            target="_blank"
            rel="noreferrer"
          >
            <img src={futureImg} alt="future-africa" />
          </a>
          <a
            href="https://www.benjamindada.com/eden-launch-andela"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dadaImg} alt="benjamindada" />
          </a>
          <a
            href="https://techcabal.com/2020/12/17/the-backend-eden-choplife/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cabalImg} alt="techcabal" />
          </a>
          <a
            href="https://techpoint.africa/2019/09/17/eden-bettering-lives-in-african-cities/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={pointImg} alt="techpoint" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Press;
