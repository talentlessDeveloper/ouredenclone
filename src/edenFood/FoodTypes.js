import React from "react";

function FoodTypes({ typeRef, types, itemRef, current, setCurrent }) {
  // const width = +typeRef.current.clientWidth / types.length;
  // console.log(width);
  return (
    <div className="foodMenu__type">
      <div className="foodtypes--container" ref={typeRef}>
        {types.map((type, idx) => {
          return (
            <div
              className="type-item"
              key={`type${idx}`}
              ref={itemRef}
              data-item={current}
              style={{
                width: `115px`,
              }}
            >
              <p
                className={current === idx ? "active" : ""}
                onClick={() => {
                  setCurrent(idx);
                  if (current < 3) {
                    typeRef.current.style.transform = `translateX(-${
                      (current + 1) * 12
                    }%)`;
                  }
                }}
              >
                {type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodTypes;
