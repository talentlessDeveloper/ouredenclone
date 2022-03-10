import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import IndividualPlan from "./IndividualPlan";
import SelectPlan from "./SelectPlan";
import SharePlan from "./SharePlan";
import TeamPlan from "./TeamPlan";
import { useForm } from "react-hook-form";

function WhyEdenPlan({ isModal, setIsModal, debounceFn }) {
  const [plan, setPlan] = useState("individual");
  const [shareMessage, setShareMessage] = useState(false);

  const handleCancelModal = () => {
    setIsModal(false);
  };

  const debounced = debounceFn(function changeHeaderBg() {
    if (window.scrollY > 110) {
      setShareMessage(true);
    } else {
      setShareMessage(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", debounced);

    return () => window.removeEventListener("scroll", debounced);
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data, e) => {
    e.preventDefault();
    console.log(data);
    setIsModal(true);
    reset({
      email: "",
    });
  };

  return (
    <section className="whyEdenPlan">
      <div className="whyEdenPlan__content wrapper">
        <div className="whyEdenPlan__title">
          <h1>
            The best time to start your Eden life was yesterday, the second best
            time is <span>now</span>.
          </h1>

          <p className="whyEdenPlan__subtitle">There's an Eden plan for you</p>
        </div>
        <div className="form-wrapper">
          <SelectPlan plan={plan} setPlan={setPlan} />

          <form
            className={
              plan === "individual"
                ? "whyEdenPlan__form active"
                : "whyEdenPlan__form active2"
            }
            onSubmit={handleSubmit(submit)}
          >
            {plan === "individual" ? (
              <IndividualPlan register={register} errors={errors} />
            ) : (
              <TeamPlan register={register} errors={errors} />
            )}
          </form>

          <div className="whyEdenPlan__share">
            {shareMessage && <SharePlan title={"Share"} />}
          </div>
        </div>
        {isModal ? <Modal handleCancelModal={handleCancelModal} /> : null}
      </div>
    </section>
  );
}

export default WhyEdenPlan;
