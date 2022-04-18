import React, { useEffect, useState } from "react";
import "../../App.css";
import mealService from "../../services/meal.service";
import MealCard from "./meal-card.component";
import { Link } from "react-router-dom";
import EditButton from "./edit.component";
import SelectMeal from "./select-meal.component";
import { FaRegTrashAlt } from "react-icons/fa";
import MealPagination from "./meal-pagination";

const TotalMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    mealService
      .getMeals()
      .then((res) => {
        console.log(res);
        setMeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeMeal = (id) => {
    mealService.deleteMeal(id).then((res) => {
      setMeals((meals) => meals.filter((meal) => meal._id !== id));
    });
  };

  return (
    <div>
      <div>
        <h1 className="meal-list-title">Meal List</h1>
      </div>
      <div className="cards">
        {meals.map((meal) => (
          <div className="meal-card">
            <MealCard
              key={meal._id}
              image={meal.image}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
            <div className="meal-card-body">
              <SelectMeal mealId={meal._id} />
            </div>
            <div className="meal-card-edit-icon">
              <Link to={`/admin/meals/edit/${meal._id}`}>
                <EditButton />
              </Link>
            </div>
            <div
              className="meal-card-delete-icon"
              onClick={(e) => removeMeal(meal._id, e)}
            >
              <FaRegTrashAlt />
            </div>
          </div>
        ))}
      </div>
      <div>
        <MealPagination />
      </div>
    </div>
  );
};

export default TotalMeals;
