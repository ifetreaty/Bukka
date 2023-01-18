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
const MenuItem = db.menuitem;
checkDuplicateMealName = (req, res, next) => {
    MenuItem.findOne({
        meal: req.body.meal,
    }).exec((err, menuitem) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (menuitem) {
            res.status(400).send({ message: "Failed! Meal name already exists!" });
            return;
        }
        next();
    });
};
checkCategoryExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Category.findOne({
        _id: req.body.category,
    });
    if (category == null) {
        res.status(400).send({ message: "Category not found!" });
        return;
    }
    console.log(category, "yo");
    next();
});
const verifyMenuItem = {
    checkDuplicateMealName,
    checkCategoryExists,
};
module.exports = verifyMenuItem;
