const { menuitem } = require("../models");
const db = require("../models");
const Category = require("../models/category.model");
const Meal = db.meal;
const MenuItem = db.menuitem;
const mealRepository = require("../models/meal-repository");

exports.addNewMeal = async (req, res) => {
  try {
    let payload = {
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
    };
    let meal = await mealRepository.createMeal({
      ...payload,
    });
    res.status(200).json({
      status: true,
      data: meal,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};
exports.getMeals = async (req, res) => {
  try {
    let meals = await mealRepository.meals();
    res.status(200).json({
      status: true,
      data: meals,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.getMeal = async (req, res) => {
  try {
    let id = req.params.id;
    let mealDetails = await mealRepository.mealById(id);
    res.status(200).json({
      status: true,
      data: mealDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};
exports.deleteMeal = async (req, res) => {
  try {
    let id = req.params.id;
    let mealDetails = await mealRepository.removeMeal(id);
    res.status(200).json({
      status: true,
      data: mealDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};
exports.editMeal = (req, res) => {
  console.log(req.body);
  Meal.findByIdAndUpdate(req.params.id, req.body)
    .then((meal) => {
      if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
      }
      res.json(meal);
    })
    .catch((err) => {
      res.status(500).send({ message: "Failed", err });
    });
};
exports.getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json(categories.map((c) => ({value: c._id, label: c.name})));
};
