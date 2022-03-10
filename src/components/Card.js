import React from "react";
import parse from "html-react-parser";

function Card({ name, username, image, description }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__img">
          <img src={image} alt={name} />
        </div>
        <div className="card__content">
          <h3 className="card__name">{name}</h3>
          <h5 className="card__username">{`@${username}`}</h5>
        </div>
      </div>

      <p className="card__description">{parse(description)}</p>
    </div>
  );
}

export default Card;
