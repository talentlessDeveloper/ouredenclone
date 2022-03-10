import React, { useEffect, useState } from "react";
// import Accordion from "./Accordion";
import { questions } from "./questions";
import { options } from "./options";
import Accordion from "./Accordion";
import Modal from "./Modal";
import waitingBg from "../assets/waiting-bg.svg";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useForm } from "react-hook-form";

function Waiting({ debounced, changeBg, isModal, setIsModal }) {
  const [isOpen, setIsOpen] = useState(0);
  const [arrow, setArrow] = useState(false);

  // const [isOption, setIsOption] = useState("Select your city");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data, e) => {
    console.log(data);
    setIsModal(true);
    reset({
      email: "",
    });
  };

  const handleCancelModal = () => {
    setIsModal(false);
  };

  const handleOpen = (index) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  const handleArrow = () => {
    setArrow(!arrow);
  };

  useEffect(() => {
    debounced();
    window.addEventListener("resize", debounced);

    return () => window.removeEventListener("resize", debounced);
  }, [debounced, changeBg]);

  // const handleOptions = (e) => {
  //   let value = e.target.dataset.value;
  //   setIsOption(value);
  // };
  return (
    <section
      className="waiting"
      style={
        !changeBg
          ? {
              background: `#f6fffa url(${waitingBg}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right -35px bottom 45%",
              backgroundSize: "30%",
            }
          : {
              background: `#f6fffa url(${waitingBg}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right -35px bottom -15%",
              backgroundSize: "15%",
            }
      }
    >
      <div className="question wrapper">
        <div className="question__title">
          <h2>
            You have questions? <br /> We have answers.
          </h2>
        </div>

        <div className="question__description">
          {questions.map(({ title, content }, index) => {
            return (
              <Accordion
                key={`item${index}`}
                title={title}
                content={content}
                isOpen={isOpen}
                handleOpen={handleOpen}
                index={index}
              />
            );
          })}
        </div>

        <div className="question__form">
          <h3 className="title">Not in Lagos?</h3>

          <p>
            We're coming to your city. Be the first to know when we touch down.
          </p>

          <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="input-cont">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                className="form__input"
              />
              {errors.email && (
                <div className="email-error">
                  <p>Please enter a valid email address</p>
                </div>
              )}
            </div>
            <div className={arrow ? "custom-select rotate" : "custom-select"}>
              <select
                onClick={handleArrow}
                className="form__select"
                {...register("city")}
                onChange={(e) => e.target.value}
              >
                <option value="sel" disabled>
                  Select your city
                </option>
                {options.map((option, idx) => (
                  <option value={option.label} key={`option${idx}`}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span>
                <IoIosArrowDown className="select-arrow" />
              </span>
              <input
                type="submit"
                value="Send Message"
                className="form__btn form__btn--mobile"
              />
              <button type="submit" className="form__btn form__btn--desktop">
                <HiOutlineArrowRight />
              </button>
            </div>
          </form>
        </div>
        {isModal && <Modal handleCancelModal={handleCancelModal} />}
      </div>
    </section>
  );
}

export default Waiting;
