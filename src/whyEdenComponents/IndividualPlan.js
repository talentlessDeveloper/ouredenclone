import React from "react";

function IndividualPlan({ register, errors }) {
  return (
    <>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="fullname"
        placeholder="Full Name"
        {...register("fullname", {
          required: true,
        })}
      />
      {errors.fullname && (
        <div className="error">
          <p>Please check your fullname</p>
        </div>
      )}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email@example.com"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.email && (
        <div className="error">
          <p>Please enter a valid email address</p>
        </div>
      )}
      <label htmlFor="phone">Phone number</label>
      <input
        type="tel"
        id="phone"
        name="phonenumber"
        placeholder="Enter phone number"
        {...register("phonenumber", {
          required: true,
          pattern: /^[0]{1}[0-9]{10}/,
        })}
      />
      {errors.phonenumber && (
        <div className="error">
          <p>Please enter a phone number</p>
        </div>
      )}

      <input
        type="submit"
        value={"Enjoy Quality Service"}
        className="plan-btn"
      />
    </>
  );
}

export default IndividualPlan;
