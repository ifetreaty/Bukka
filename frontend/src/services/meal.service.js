import http from "./http";

const errorHandler = (err) => {
  throw err;
};

const user = JSON.parse(localStorage.getItem("user"));
const mealService = {
  handleUpload(file) {
    console.log(user, "mama");
    return http
      .post("/upload", file, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  saveNewMeal(newMeal) {
    return http
      .post("/meals", newMeal, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMeal(id) {
    return http
      .get(`/meals/${id}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editMeal(meal, id) {
    console.log(meal);
    return http
      .put(`/meals/${id}`, meal, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteMeal(id) {
    return http
      .delete(`/meals/${id}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getMeals(pageNumber) {
    return http
      .get(`/meals?page=${pageNumber}`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getCategories() {
    return http
      .get(`/categories`, {
        headers: {
          "x-access-token": user.accessToken,
        },
      })
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default mealService;
