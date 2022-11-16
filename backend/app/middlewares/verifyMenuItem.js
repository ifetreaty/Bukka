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

checkCategoryExists = async (req, res, next) => {
  const category = await Category.findOne({
    _id: req.body.category,
  });
  if (category == null) {
    res.status(400).send({ message: "Category not found!" });
    return;
  }
  console.log(category, "yo");

  next();
};

const verifyMenuItem = {
  checkDuplicateMealName,
  checkCategoryExists,
};

module.exports = verifyMenuItem;
