import React from "react";
import { Link } from "react-router-dom";
import TotalMeals from "./TotalMeals.component";
import NavBar from "../admin-homepage.component";

const AddMeal = (props) => {
  return (
    <div>
      <NavBar />
      <div className="homepage-body">
        <h2 id="homepage-body-header">Manage Meals</h2>
        <Link to="/admin/meals/meal-form">
          <button className="homepage-body-button">
            <span>Add New Meal</span>
          </button>
        </Link>
      </div>
      <div className="total-meals-style">
        <TotalMeals />
      </div>
    </div>
  );
};

export default AddMeal;
