import React, { useState, useEffect, useCallback } from "react";
import LaundryItem from "./LaundryItem";

function LaundryPlanWeekly() {
  const [amount, setAmount] = useState(48000);
  const [laundryBag, setLaundryBag] = useState(1);

  const [active, setActive] = useState("once");

  const [price, setPrice] = useState(48000);

  const changePrice = useCallback(() => {
    if (active === "once") setAmount(48000);
    else if (active === "twice") setAmount(24000);
    else if (active === "monthly") setAmount(12000);

    return amount * laundryBag;
  }, [laundryBag, active, amount, setAmount]);

  useEffect(() => {
    setPrice(changePrice());
  }, [changePrice]);

  const handleIncrease = () => {
    setLaundryBag((bag) => bag + 1);
    console.log("increase");
  };
  const handleDecrease = () => {
    setLaundryBag((bag) => (bag <= 1 ? 1 : bag - 1));
  };

  return (
    <>
      <LaundryItem
        active={active}
        setActive={setActive}
        laundryBag={laundryBag}
        price={price}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
    </>
  );
}

export default LaundryPlanWeekly;
