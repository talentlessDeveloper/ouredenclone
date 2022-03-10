import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function CleaningSelect({ roomIncrease, roomDecrease, ...room }) {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <>
      <div className="select">
        <div className="selector">
          <div className="label">
            <span>
              {room.bed <= 0 ? null : `${room.bed} Bedrooms, `}{" "}
              {room.dining <= 0
                ? null
                : `${room.dining} Living Rooms /
              Dining Areas, `}
              {room.toilet <= 0
                ? null
                : `${room.toilet}  Toilets / Bathrooms, `}
              {room.kitchen <= 0 ? null : `${room.kitchen} Kitchen, `}
              {room.store <= 0 ? null : `${room.store} Study / Store, `}
              {room.outdoor <= 0 ? null : `${room.outdoor} Outdoor / Balcony`}
            </span>
          </div>
          <MdOutlineKeyboardArrowDown
            className={openSelect ? "icon rotate" : "icon"}
            onClick={() => setOpenSelect((p) => !p)}
          />

          <div className={openSelect ? "hidden" : "hide"}>
            <div className="selector-items">
              <ul>
                <li>
                  <span>Bedroom</span>
                  <span data-item="bed">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span> {room.bed} </span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
                <li>
                  <span>Living Rooms / Dining Areas</span>
                  <span data-item="dining">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span>{room.dining} </span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
                <li>
                  <span>Toilets / Bathroom</span>
                  <span data-item="toilet">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span>{room.toilet}</span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
                <li>
                  <span>Kitchen</span>
                  <span data-item="kitchen">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span>{room.kitchen}</span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
                <li>
                  <span>Study / Store</span>
                  <span data-item="store">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span>{room.store} </span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
                <li>
                  <span>Outdoor / Balcony</span>
                  <span data-item="outdoor">
                    <button onClick={roomDecrease}>
                      <AiOutlineMinus />
                    </button>
                    <span> {room.outdoor} </span>
                    <button onClick={roomIncrease}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </li>
              </ul>

              <button
                className="done-btn"
                onClick={() => setOpenSelect((p) => !p)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CleaningSelect;
