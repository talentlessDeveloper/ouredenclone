import React, { useCallback, useEffect, useState } from "react";
import CleaningItem from "./CleaningItem";

import { deep } from "./deepCleaning";

function CleaningDeep({
  active,
  setActive,
  roomIncrease,
  roomDecrease,
  totalRooms,
  ...room
}) {
  const [price, setPrice] = useState(80000);
  const [amount, setAmount] = useState(0);

  // state to modify the total rooms
  const [total, setTotal] = useState(0);
  const [store, setStore] = useState(0);
  const [isBalcony, setIsBalcony] = useState(0);

  const checkActive = useCallback(() => {
    if (active === "once") setAmount(20000);
    else if (active === "twice") setAmount(10000);
    else {
      setAmount(5000);
    }
    return amount;
  }, [amount, active]);

  const storePrice = useCallback(() => {
    if (totalRooms < 5) {
      if (room.store === 3 || room.store === 4) {
        setStore(room.store - 1.25);
      } else if (room.store < 3) {
        setStore(room.store);
      } else {
        setStore(room.store - 2.5);
      }
    } else if (totalRooms >= 5) {
      if (room.store === 2 || room.store === 3) {
        setStore(room.store - 1.25);
      } else if (room.store > 3 && room.store < 7) {
        setStore(room.store - 2.5);
      } else if (room.store <= 1) {
        setStore(room.store);
      } else {
        setStore(room.store - 3.75);
      }
    }

    let storeAmount = 16000;
    if (active === "once") {
      storeAmount = 16000;
    } else if (active === "twice") {
      storeAmount = 8000;
    } else {
      storeAmount = 4000;
    }

    return store * storeAmount;
  }, [store, room.store, totalRooms, active]);

  const balconyPrice = useCallback(() => {
    if (totalRooms < 5) {
      if (room.outdoor % 2 === 0 && room.outdoor < 8) {
        setIsBalcony(0);
      } else if (room.outdoor === 1) {
        setIsBalcony(room.outdoor);
      } else if (room.outdoor === 3) {
        setIsBalcony(2);
      } else if (room.outdoor === 5) {
        setIsBalcony(3);
      } else if (room.outdoor === 7) {
        setIsBalcony(4);
      } else {
        setIsBalcony(room.outdoor - 3);
      }
    } else if (totalRooms >= 5 && totalRooms % 2 === 1 && totalRooms < 10) {
      if (room.outdoor < 1 || (room.outdoor % 2 === 1 && room.outdoor < 7)) {
        setIsBalcony(0);
      } else if (
        room.outdoor > 1 ||
        (room.outdoor % 2 === 0 && room.outdoor < 7)
      ) {
        setIsBalcony(room.outdoor / 2);
      } else {
        setIsBalcony(room.outdoor - 3);
      }
    } else if (totalRooms >= 5 && totalRooms % 2 === 0 && totalRooms < 10) {
      if (room.outdoor === 1) {
        setIsBalcony(1);
      } else if (
        room.outdoor > 1 ||
        (room.outdoor % 2 === 0 && room.outdoor < 6)
      ) {
        setIsBalcony(0);
      } else if (room.outdoor === 3) {
        setIsBalcony(2);
      } else if (room.outdoor === 5) {
        setIsBalcony(3);
      } else {
        setIsBalcony(room.outdoor - 2);
      }
    } else if (totalRooms >= 10) {
      setIsBalcony(room.outdoor);
    }

    let balconyAmount = 20000;
    if (active === "once") {
      balconyAmount = 20000;
    } else if (active === "twice") {
      balconyAmount = 10000;
    } else {
      balconyAmount = 5000;
    }

    return isBalcony * balconyAmount;
  }, [totalRooms, room.outdoor, active, isBalcony]);

  const changePrice = useCallback(() => {
    checkActive();
    if (totalRooms < 5) {
      setTotal(totalRooms);
    } else if (totalRooms === 5 || totalRooms === 6) {
      setTotal(5);
    } else if (totalRooms === 7 || totalRooms === 8) {
      setTotal(6);
    } else if (totalRooms === 9 || totalRooms === 10) {
      setTotal(7);
    } else {
      setTotal(totalRooms - 3);
    }

    return total * amount;
  }, [total, amount, checkActive, totalRooms]);

  useEffect(() => {
    const totalPrice = changePrice() + storePrice() + balconyPrice();
    setPrice(totalPrice);
  }, [changePrice, storePrice, balconyPrice]);
  return (
    <>
      <CleaningItem
        title="What will Deep Cleaning entail?"
        active={active}
        setActive={setActive}
        price={price}
        lists={deep}
        roomIncrease={roomIncrease}
        roomDecrease={roomDecrease}
        totalRooms={totalRooms}
        {...room}
      />
    </>
  );
}

export default CleaningDeep;
