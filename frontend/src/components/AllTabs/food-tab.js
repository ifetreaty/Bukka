import React, { Component, useState, useEffect } from "react";
import menuService from "../../services/menu.service";
import MealCard from "../MealComponents/meal-card.component";
import SelectMeal from "../MealComponents/select-meal.component";
import DeleteButton from "../MealComponents/delete.component";

export default class FoodTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodMenu: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    menuService.getMenuItems().then((res) => {
      console.log(res);
      this.setState({
        foodMenu: res.data,
      });
    });
  }

  removeItem(id) {
    menuService.deleteMenuItem(id).then((res) => {
      this.setState({
        foodMenu: this.state.foodMenu.filter((menuitem) => menuitem._id !== id),
      });
    });
  }

  render() {
    return (
      <div>
        <div className="cards">
          {
            (this.state.foodMenu.
            map((menuitem) => {
              return (
                <div className="meal-card">
                  <MealCard
                    key={menuitem._id}
                    image={menuitem.image}
                    name={menuitem.name}
                    description={menuitem.description}
                    price={menuitem.price}
                  />
                  <div className="meal-card-body">
                  <SelectMeal />
                </div>
                <div
                  className="meal-card-delete-icon"
                  onClick={(e) => this.removeItem(menuitem._id, e)}
                >
                  <DeleteButton />
                </div>
                </div>
              );
            }))
          }
        </div>
      </div>
    );
  }
}
