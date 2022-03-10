import React from "react";

function FoodDate() {
  const currentDate = new Date();

  const firstday = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  ).toUTCString();
  const lastday = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
  ).toUTCString();

  const currYear = firstday.split(" ")[3];
  const nextYear = lastday.split(" ")[3];

  const currMonth = firstday.split(" ")[2];
  const nextMonth = lastday.split(" ")[2];

  const currDay = firstday.split(" ")[1];
  const nextDay = lastday.split(" ")[1];

  return (
    <>
      <p className="schedule">{`${currDay} ${currMonth} ${currYear} - ${nextDay} ${nextMonth} ${nextYear}`}</p>
    </>
  );
}

export default FoodDate;
