import React, { useState, useEffect, useCallback } from "react";
import LaundryItem from "./LaundryItem";

function LaundryPlanDaily() {
  const [amount, setAmount] = useState(27000);

  const [laundryBag, setLaundryBag] = useState(1);

  const [active, setActive] = useState("once");

  const [price, setPrice] = useState(48000);

  const changePrice = useCallback(() => {
    if (active === "once") setAmount(27000);
    else if (active === "twice") setAmount(13500);
    else if (active === "monthly") setAmount(6750);

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

export default LaundryPlanDaily;
