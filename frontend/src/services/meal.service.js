import http from "./http";

const errorHandler = (err) => {
  throw err;
};

export default {
  handleUpload(file) {
    return http
      .post("/upload", file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveNewMeal(newMeal) {
    return http
      .post("/meals", newMeal)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMeal(id) {
    return http
      .get(`/meals/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editMeal(meal, id) {
    console.log(meal);
    return http
      .put(`/meals/${id}`, meal)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteMeal(id) {
    return http
      .delete(`/meals/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMeals(pageNumber) {
    return http
      .get(`/meals?page=${pageNumber}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
