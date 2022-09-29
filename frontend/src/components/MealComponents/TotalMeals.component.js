import React, { useEffect, useState } from "react";
import "../../App.css";
import mealService from "../../services/meal.service";
import MealCard from "./meal-card.component";
import { Link, useParams } from "react-router-dom";
import EditButton from "./edit.component";
import SelectMeal from "./select-meal.component";
import { FaRegTrashAlt } from "react-icons/fa";
import MealPagination from "./meal-pagination";

const TotalMeals = () => {
  const params = useParams();
  const pageNumber = params.pageNumber || 1;

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const res = await mealService.getMeals(page);
        console.log(res);

        const { data, pages: totalPages } = res;

        setPages(totalPages);
        setMeals(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
      }
    };

    fetchMeals();
  }, [page]);

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
      <div className="cards total-meals">
        {meals.map((meal) => (
          <div className="meal-card total-meal-card">
            <MealCard
              key={meal._id}
              image={meal?.image}
              name={meal?.name}
              description={meal?.description}
              price={meal?.price}
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
        <MealPagination
          loading={loading}
          error={error}
          page={page}
          pages={pages}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default TotalMeals;
