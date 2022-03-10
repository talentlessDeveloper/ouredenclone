import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const teamOptions = [
  "Team lunch",
  "Team careboxes",
  "Team laundry",
  "Team housecleaning",
];

function TeamPlan({ register, errors }) {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow((p) => !p);
  };
  return (
    <>
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company Name"
        {...register("company", {
          required: true,
        })}
      />
      {errors.company && (
        <div className="error">
          <p>Please check your company name</p>
        </div>
      )}
      <label htmlFor="person">Contact person</label>
      <input
        type="text"
        id="person"
        name="contactperson"
        placeholder="Enter name"
        {...register("contactperson", {
          required: true,
        })}
      />
      {errors.contactperson && (
        <div className="error">
          <p>Please your contact name</p>
        </div>
      )}
      <label htmlFor="email">Contact person email address</label>
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
          <p>Please check your phone number</p>
        </div>
      )}
      <label htmlFor="teamplan">What plans would you like for your team?</label>
      <div className={arrow ? "custom-select rotate" : "custom-select"}>
        <select
          name="teamplan"
          id="teamplan"
          {...register("team-option", {
            required: true,
          })}
          onChange={(e) => e.target.value}
          onClick={handleArrow}
        >
          <option value="sel" disabled>
            Select Services
          </option>
          {teamOptions.map((option, idx) => (
            <option value={option} key={`option${idx}`}>
              {option}
            </option>
          ))}
          <button>Done</button>
        </select>

        <span>
          <IoIosArrowDown />
        </span>
      </div>
      {errors.teamplan && (
        <div className="error">
          <p>Please select an option</p>
        </div>
      )}
      <label htmlFor="message">Anything else you’d like us to know?</label>
      <textarea
        name="message"
        id="message"
        placeholder="Extra message"
        cols="30"
        rows="10"
        {...register("message")}
      ></textarea>
      <input
        type="submit"
        value={"Enjoy Quality Service"}
        className="plan-btn"
      />
    </>
  );
}

export default TeamPlan;
