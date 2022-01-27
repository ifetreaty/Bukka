import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import mealService from "../services/meal.service";
import { useState } from "react";
import MealForm from "../pages/meal-form";

const AddMeal = (props) => {
  return (
    <div>
      <div className="homepage-body">
        <h2 id="homepage-body-header">Manage Meals</h2>
        <Link to="/admin/meals/meal-form">
          <button id="homepage-body-button">Add New Meal</button>
        </Link>
      </div>
    </div>
  );
};

export default AddMeal;
