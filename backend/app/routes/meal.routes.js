const express = require("express");
const router = express.Router();

const controller = require("../controllers/meal.controller");

router.get("/meals", controller.getMeals);

router.post("/meals", controller.addNewMeal);

router.get("/meals/:id", controller.getMeal);

router.put("/meals/:id", controller.editMeal);

router.delete("/meals/:id", controller.deleteMeal);

module.exports = router;
