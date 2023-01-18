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
const Meal = require("../models/meal.model");
exports.meals = () => __awaiter(void 0, void 0, void 0, function* () {
    const meals = yield Meal.find();
    return meals;
});
exports.mealById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = yield Meal.findById(id);
    return meal;
});
exports.createMeal = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newMeal = yield Meal.create(payload);
    return newMeal;
});
exports.removeMeal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const meal = yield Meal.findByIdAndRemove(id);
    return meal;
});
