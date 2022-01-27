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
};
