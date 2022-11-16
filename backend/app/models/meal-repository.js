const Meal = require("../models/meal.model");
exports.meals = async () => {
  const meals = await Meal.find();
  return meals;
};
exports.mealById = async (id) => {
  const meal = await Meal.findById(id);
  return meal;
};
exports.createMeal = async (payload) => {
  const newMeal = await Meal.create(payload);
  return newMeal;
};
exports.removeMeal = async (id) => {
  const meal = await Meal.findByIdAndRemove(id);
  return meal;
};
