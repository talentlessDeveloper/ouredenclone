import React, { useCallback, useEffect, useState } from "react";
import CleaningItem from "./CleaningItem";

import { construction } from "./constructionCleaning";

function CleaningConstruction({
  active,
  setActive,
  cleaningPlan,
  roomIncrease,
  roomDecrease,
  totalRooms,
  ...room
}) {
  const [price, setPrice] = useState(112000);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [store, setStore] = useState(0);
  const [isBalcony, setIsBalcony] = useState(0);

  const checkActive = useCallback(() => {
    if (active === "once") setAmount(28000);
    else if (active === "twice") setAmount(14000);
    else {
      setAmount(7000);
    }
    return amount;
  }, [amount, active]);

  const storePrice = useCallback(() => {
    if (totalRooms < 5) {
      if (room.store < 3) {
        setStore(room.store);
      } else if (room.store >= 3) {
        setStore(room.store - 1.67);
      }
    } else if (totalRooms >= 5) {
      if (room.store <= 1) {
        setStore(room.store);
      } else {
        setStore(room.store - 1.67);
      }
    } else if (totalRooms === 6) {
      if (room.store === 0) {
        setStore(0);
      } else {
        setStore(room.store - 1.67);
      }
    }

    let storeAmount;
    if (active === "once") {
      storeAmount = 24000;
    } else if (active === "twice") {
      storeAmount = 12000;
    } else {
      storeAmount = 6000;
    }

    return Math.round((store * storeAmount) / 1000) * 1000;
  }, [active, totalRooms, room.store, store]);

  const balconyPrice = useCallback(() => {
    const totalBalcony = room.outdoor + totalRooms;

    if (totalRooms < 10) {
      if (totalBalcony < 5) {
        setIsBalcony(0);
      } else if (totalBalcony >= 5 && totalBalcony < 7) {
        setIsBalcony(room.outdoor);
      } else if (totalBalcony >= 7 && totalBalcony < 11) {
        setIsBalcony(room.outdoor - 1.425);
      } else {
        setIsBalcony(room.outdoor - 2.425);
      }
    } else if (totalRooms >= 10) {
      setIsBalcony(room.outdoor - 0.715);
    }

    let balconyAmount = 28000;
    if (active === "once") {
      balconyAmount = 28000;
    } else if (active === "twice") {
      balconyAmount = 14000;
    } else {
      balconyAmount = 7000;
    }

    return Math.round((isBalcony * balconyAmount) / 1000) * 1000;
  }, [totalRooms, isBalcony, room.outdoor, active]);

  const changePrice = useCallback(() => {
    checkActive();

    if (totalRooms < 5) {
      setTotal(totalRooms);
    } else if (totalRooms >= 5 && totalRooms < 7) {
      setTotal(totalRooms);
    } else if (totalRooms >= 7 && totalRooms < 11) {
      setTotal(totalRooms - 1.425);
    } else {
      setTotal(totalRooms - 2.425);
    }

    return Math.round((total * amount) / 1000) * 1000;
  }, [totalRooms, total, amount, checkActive]);

  useEffect(() => {
    const totalPrice = changePrice() + storePrice() + balconyPrice();
    setPrice(totalPrice);
  }, [changePrice, storePrice, balconyPrice]);
  return (
    <>
      <CleaningItem
        title="What will Post Construction entail?"
        active={active}
        setActive={setActive}
        price={price}
        setPrice={setPrice}
        lists={construction}
        cleaningPlan={cleaningPlan}
        roomIncrease={roomIncrease}
        roomDecrease={roomDecrease}
        totalRooms={totalRooms}
        {...room}
      />
    </>
  );
}

export default CleaningConstruction;
