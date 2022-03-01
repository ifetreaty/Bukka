import axios from "axios";

const mealService = axios.create({
  baseURL: "http://localhost:8080/api",
});

const errorHandler = (err) => {
  throw err;
};

export default {
  mealService,

  handleUpload(file) {
    return mealService
      .post("/upload", file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveNewMeal(newMeal) {
    return mealService
      .post("/meals", newMeal)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMeals() {
    return mealService.get("/meals");
  },

  getMeal(id) {
    return mealService
      .get(`/meals/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editMeal(meal, id) {
    console.log(meal);
    return mealService
      .put(`/meals/${id}`, meal)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteMeal(id) {
    return mealService
      .delete(`/meals/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
