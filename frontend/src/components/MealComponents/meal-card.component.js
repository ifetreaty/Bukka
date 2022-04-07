import React from "react";
import "../../App.css";

const MealCard = ({ image, name, description, price }) => {
  return (
    <>
      <div>
        <img src={image} alt="meal-card" className="meal-card-image" />
      </div>
      <div className="meal-card-body">
        <h5 className="meal-card-name">{name}</h5>
        <p className="meal-card-description">{description}</p>
      </div>
      <div>
        <ul className="list-group">
          <li className="list-group-item price">
            Price: N
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 5,
            }).format(price)}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MealCard;
