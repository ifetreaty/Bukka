import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mealService from "../services/meal.service";
import { useState } from "react";
import MealForm from "../pages/meal-create-form";
import TotalMeals from "./TotalMeals.component";

import axios from "axios";

const AddMeal = (props) => {
  return (
    <div>
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
