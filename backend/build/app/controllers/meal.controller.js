"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { menuitem } = require("../models");
const db = require("../models");
const Category = require("../models/category.model");
const Meal = db.meal;
const MenuItem = db.menuitem;
const mealRepository = require("../models/meal-repository");
exports.addNewMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        };
        let meal = yield mealRepository.createMeal(Object.assign({}, payload));
        res.status(200).json({
            status: true,
            data: meal,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        });
    }
});
exports.getMeals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let meals = yield mealRepository.meals();
        res.status(200).json({
            status: true,
            data: meals,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        });
    }
});
exports.getMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let mealDetails = yield mealRepository.mealById(id);
        res.status(200).json({
            status: true,
            data: mealDetails,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            error: err,
        });
    }
});
exports.deleteMeal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let mealDetails = yield mealRepository.removeMeal(id);
        res.status(200).json({
            status: true,
            data: mealDetails,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            error: err,
        });
    }
});
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
exports.getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield Category.find({});
    res.status(200).json(categories.map((c) => ({ value: c._id, label: c.name })));
});
