import React, { useCallback, useEffect, useState } from "react";

import CleaningItem from "./CleaningItem";
import { standard } from "./standardCleaning";

function CleaningStandard({
  active,
  setActive,
  roomIncrease,
  roomDecrease,
  totalRooms,
  ...room
}) {
  const [price, setPrice] = useState(20000);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [isStore, setIsStore] = useState(0);
  const [isBalcony, setIsBalcony] = useState(0);

  const checkActive = useCallback(() => {
    if (active === "once") setAmount(4000);
    else if (active === "twice") setAmount(2000);
    else {
      setAmount(1000);
    }
    return amount;
  }, [amount, active]);

  const balconyPrice = useCallback(() => {
    if (totalRooms < 5) {
      if (room.outdoor <= 1 || (room.outdoor % 2 === 1 && room.outdoor < 7)) {
        setIsBalcony(0);
      } else if (room.outdoor >= 7) {
        setIsBalcony(room.outdoor - 3);
      } else {
        setIsBalcony(room.outdoor / 2);
      }
    } else if (totalRooms >= 5 && totalRooms % 2 === 1 && totalRooms < 10) {
      if (room.outdoor < 1 || (room.outdoor % 2 === 0 && room.outdoor < 6)) {
        setIsBalcony(0);
      } else if (room.outdoor === 1) {
        setIsBalcony(1);
      } else {
        setIsBalcony(room.outdoor - 2);
      }
    } else if (totalRooms >= 5 && totalRooms % 2 === 0 && totalRooms < 10) {
      if (room.outdoor % 2 === 1 && room.outdoor < 5) {
        setIsBalcony(0);
      } else if (room.outdoor % 2 === 0 && room.outdoor < 5) {
        setIsBalcony(room.outdoor / 2);
      } else if (room.outdoor >= 5) {
        setIsBalcony(room.outdoor - 2);
      }
    } else if (totalRooms >= 10) {
      setIsBalcony(room.outdoor);
    }

    let balconyAmount = 4000;
    if (active === "once") {
      balconyAmount = 4000;
    } else if (active === "twice") {
      balconyAmount = 2000;
    } else {
      balconyAmount = 1000;
    }

    return isBalcony * balconyAmount;
  }, [totalRooms, room.outdoor, active, isBalcony]);

  const storePrice = useCallback(() => {
    if (totalRooms < 5 && room.store > 2) {
      setIsStore(room.store - 2);
    } else if (totalRooms < 5 && room.store <= 2) {
      setIsStore(0);
    } else if (totalRooms >= 5 && room.store === 4) {
      setIsStore(2);
    } else if (totalRooms >= 5 && room.store < 4) {
      setIsStore(room.store);
    } else if (totalRooms >= 5 && room.store >= 5) {
      setIsStore(room.store - 1);
    }

    let storeAmount = 2000;
    if (active === "once") {
      storeAmount = 2000;
    } else if (active === "twice") {
      storeAmount = 1000;
    } else {
      storeAmount = 500;
    }

    return isStore * storeAmount;
  }, [active, isStore, room.store, totalRooms]);

  const changePrice = useCallback(() => {
    checkActive();

    if (totalRooms <= 5) {
      setTotal(5);
    } else if (totalRooms === 6 || totalRooms === 7) {
      setTotal(6);
    } else if (totalRooms === 8 || totalRooms === 9) {
      setTotal(7);
    } else if (totalRooms === 10) {
      setTotal(8);
    } else if (totalRooms > 10 && totalRooms < 15) {
      setTotal(totalRooms - 2);
    } else {
      setTotal(totalRooms - 3);
    }

    return total * amount;
  }, [total, amount, totalRooms, checkActive]);

  useEffect(() => {
    const totalPrice = changePrice() + storePrice() + balconyPrice();

    setPrice(totalPrice);
  }, [changePrice, storePrice, balconyPrice]);

  return (
    <>
      <CleaningItem
        title="What will Standard Cleaning entail?"
        active={active}
        setActive={setActive}
        price={price}
        setPrice={setPrice}
        lists={standard}
        roomIncrease={roomIncrease}
        roomDecrease={roomDecrease}
        {...room}
      />
    </>
  );
}

export default CleaningStandard;
