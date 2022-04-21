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

checkCategoryExists = (req, res, next) => {
  Category.findOne({
    category: req.body.category,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  next();
};

const verifyMenuItem = {
  checkDuplicateMealName,
  checkCategoryExists,
};

module.exports = verifyMenuItem;
