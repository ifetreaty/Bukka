const express = require("express");
const router = express.Router();
const Meal = require("../models/meal.model");

router.get("/meals", (req, res, next) => {
  Meal.find()
    .then((mealsFromDB) => res.status(200).json(mealsFromDB))
    .catch((err) => next(err));
});

router.post("/meals", (req, res, next) => {
  Meal.create(req.body)
    .then((aNewMeal) => {
      res.status(200).json(aNewMeal);
    })
    .catch((err) => next(err));
});

module.exports = router;
