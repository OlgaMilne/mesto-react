import React from "react";

function Card({ name, link, likes, onCardClick }) {

  function handleClick() {
    onCardClick(name, link);
  }

  return (
    <li className="card">
      <img className="card__photo" src={link} alt={name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__caption">
          {name}
        </h2>
        <div className="card__wrapper">
          <button className="card__like-button" type="button"></button>
          <span className="card__like-count">
            {likes}
          </span>
        </div>
      </div>
      <button className="card__trash-button" type="button"></button>
    </li>
  );
}

export default Card;
