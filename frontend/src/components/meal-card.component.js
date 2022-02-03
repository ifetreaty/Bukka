import React, { Component } from "react";
import "../App.css";

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
          <li className="list-group-item price">Price: {price}</li>
        </ul>
      </div>
      <div className="meal-card-body">
        <button className="meal-card-button">
          <a href="#" className="meal-card-link">
            <span>Select Meal</span>
          </a>
        </button>
      </div>
    </>
  );
};

export default MealCard;
