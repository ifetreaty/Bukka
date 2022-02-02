import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import mealService from "../services/meal.service";
import MealCard from "./meal-card.component";

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
                  key={meal.name}
                  image={meal.image}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
