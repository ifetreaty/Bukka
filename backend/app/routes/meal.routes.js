const express = require("express");
const router = express.Router();

const controller = require("../controllers/meal.controller");
const { authJwt } = require("../middlewares");

router.get(
  "/meals",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getMeals
);

router.post(
  "/meals",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.addNewMeal
);

router.get(
  "/meals/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getMeal
);

router.put(
  "/meals/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.editMeal
);

router.delete(
  "/meals/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.deleteMeal
);

router.get(
  "/categories",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.getCategories
);

module.exports = router;
