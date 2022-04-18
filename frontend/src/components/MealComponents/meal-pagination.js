import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MealCard from "./meal-card.component";
import Pagination from "../pagination.component";
import mealService from "../../services/meal.service";

const MealPagination = () => {
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
        const res = await mealService.getMeals(pageNumber);
        console.log(res);

        const { data, pages: totalPages } = await res.json();

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

  return (
    <div className="meal-pagination">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
        <>
          <Pagination page={page} pages={pages} changePage={setPage} />
          <div className="app__meals">
            {meals.map((meal) => (
              <MealCard key={meal._id} meal={meal} />
            ))}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  );
};

export default MealPagination;
