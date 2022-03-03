import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import mealService from "../services/meal.service";
import MealCard from "./meal-card.component";
import { Link } from "react-router-dom";
import EditButton from "./edit.component";
import DeleteButton from "./delete.component";
import SelectMeal from "./select-meal.component";

export default class TotalMeals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    mealService.getMeals().then((res) => {
      console.log(res);
      this.setState({
        meals: res.data,
      });
    });
  }

  removeMeal(id, e) {
    mealService.deleteMeal(id).then((res) => {
      this.setState({
        meals: this.state.meals.filter((meal) => meal._id !== id),
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="meal-list-title">Meal List</h1>
        </div>
        <div className="cards">
          {this.state.meals.map((meal) => {
            return (
              <div className="meal-card">
                <MealCard
                  key={meal._id}
                  image={meal.image}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
                <div className="meal-card-body">
                  <SelectMeal />
                </div>
                <div className="meal-card-edit-icon">
                  <Link to={`/admin/meals/edit/${meal._id}`}>
                    <EditButton />
                  </Link>
                </div>
                <div
                  className="meal-card-delete-icon"
                  onClick={(e) => this.removeMeal(meal._id, e)}
                >
                  <DeleteButton />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
