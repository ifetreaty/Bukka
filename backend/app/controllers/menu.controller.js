const config = require("../config/auth.config");
const MenuItem = require("../models/menu-item.model");
const Meal = require("../models/meal.model");
const { menuitem } = require("../models");

exports.getMenuItems = async (req, res, next) => {
  MenuItem.find()
    .then((menuItemsFromDB) => res.status(200).json(menuItemsFromDB))
    .catch((err) => next(err));
};

exports.addMenuItem = (req, res) => {
  const menuItem = new MenuItem({
    meal: req.body.meal,
    category: req.body.category,
  });

  menuItem.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.json({ message: "Menu item was added successfully!", menuItem: item });
  });
};

exports.deleteMenuItem = (req, res) => {
  MenuItem.findByIdAndRemove(req.params.id, req.body)
    .then((menuitem) => {
      res.json(menuitem);
    })
    .catch((err) => {
      res.status(404).send({ message: "Failed", err });
    });
};

exports.getMenuItemsInCategory = (req, res, next) => {
  MenuItem.find({ category: req.params.id }).exec(function (err, menuitems) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.json({ message: "View menu items in this category!", menuitems });
  });
};
