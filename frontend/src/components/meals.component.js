import React from "react";
import "../App.css";
import TotalMeals from "../TotalMeals";

const Meals = (props) => {
  return (
    <div className="homepage-body">
      <h2>Meals</h2>
      <TotalMeals />     
    </div>
  );
};

export default Meals;