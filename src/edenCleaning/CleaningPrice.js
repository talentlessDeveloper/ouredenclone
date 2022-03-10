import React, { useState } from "react";
import CleaningConstruction from "./CleaningConstruction";
import CleaningDeep from "./CleaningDeep";
import CleaningStandard from "./CleaningStandard";

function CleaningPrice() {
  const [cleaningPlan, setCleaningPlan] = useState("standard");
  const [active, setActive] = useState("once");
  const [room, setRoom] = useState({
    bed: 1,
    dining: 1,
    toilet: 1,
    kitchen: 1,
    store: 0,
    outdoor: 0,
  });
  const totalRooms = room.bed + room.dining + room.kitchen + room.toilet;
  const roomIncrease = (e) => {
    const { parentElement } = e.target;
    const dataset = parentElement.dataset.item;

    if (dataset === "bed") {
      // check total rooms
      setRoom({
        ...room,
        bed: room.bed + 1,
      });
    } else if (dataset === "dining") {
      setRoom({
        ...room,
        dining: room.dining + 1,
      });
    } else if (dataset === "toilet") {
      setRoom({
        ...room,
        toilet: room.toilet + 1,
      });
    } else if (dataset === "kitchen") {
      setRoom({
        ...room,
        kitchen: room.kitchen + 1,
      });
    } else if (dataset === "store") {
      setRoom({
        ...room,
        store: room.store + 1,
      });
    } else if (dataset === "outdoor") {
      // setPrice((p) => (room.outdoor + 1 > 1 ? p + 4000 : p + 0));
      setRoom({
        ...room,
        outdoor: room.outdoor + 1,
      });
    }
  };

  const roomDecrease = (e) => {
    const { parentElement } = e.target;
    const dataset = parentElement.dataset.item;

    if (dataset === "bed") {
      // check total rooms
      setRoom({
        ...room,
        bed: room.bed - 1,
      });
    } else if (dataset === "dining") {
      setRoom({
        ...room,
        dining: room.dining - 1,
      });
    } else if (dataset === "toilet") {
      setRoom({
        ...room,
        toilet: room.toilet - 1,
      });
    } else if (dataset === "kitchen") {
      setRoom({
        ...room,
        kitchen: room.kitchen - 1,
      });
    } else if (dataset === "store") {
      // setPrice((p) => p - 2000);
      setRoom({
        ...room,
        store: room.store - 1,
      });
    } else if (dataset === "outdoor") {
      // setPrice((p) => p - 4000);
      setRoom({
        ...room,
        outdoor: room.outdoor - 1,
      });
    }
  };

  return (
    <>
      <ul className="price-lists">
        <li>
          <span
            className={cleaningPlan === "standard" ? "cleaning active" : ""}
            onClick={() => {
              setCleaningPlan("standard");
            }}
          >
            Standard Cleaning
          </span>
        </li>
        <li>
          <span
            className={cleaningPlan === "deep" ? "cleaning active" : ""}
            onClick={() => {
              setCleaningPlan("deep");
            }}
          >
            Deep Cleaning
          </span>
        </li>
        <li>
          <span
            className={cleaningPlan === "construction" ? "cleaning active" : ""}
            onClick={() => {
              setCleaningPlan("construction");
            }}
          >
            Post Construction Cleaning
          </span>
        </li>
      </ul>

      <div
        className={
          cleaningPlan === "standard"
            ? "foodPlan__price--weekly active"
            : "foodPlan__price--weekly"
        }
      >
        <CleaningStandard
          active={active}
          setActive={setActive}
          roomDecrease={roomDecrease}
          roomIncrease={roomIncrease}
          totalRooms={totalRooms}
          {...room}
        />
      </div>

      <div
        className={
          cleaningPlan === "deep"
            ? "foodPlan__price--daily active"
            : "foodPlan__price--daily"
        }
      >
        <CleaningDeep
          active={active}
          setActive={setActive}
          roomDecrease={roomDecrease}
          roomIncrease={roomIncrease}
          totalRooms={totalRooms}
          {...room}
        />
      </div>
      <div
        className={
          cleaningPlan === "construction"
            ? "foodPlan__price--other active"
            : "foodPlan__price--other"
        }
      >
        <CleaningConstruction
          active={active}
          setActive={setActive}
          cleaningPlan={cleaningPlan}
          roomDecrease={roomDecrease}
          roomIncrease={roomIncrease}
          totalRooms={totalRooms}
          {...room}
        />
      </div>
    </>
  );
}

export default CleaningPrice;
