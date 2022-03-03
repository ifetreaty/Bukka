const db = require("../models");
const CATEGORIES = db.CATEGORIES;
const MenuItem = db.menuitem;

checkDuplicateMealName = (req, res, next) => {
  MenuItem.findOne({
    name: req.body.name,
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

checkCategoriesExist = (req, res, next) => {
  if (req.body.categories) {
    for (let i = 0; i < req.body.categories.length; i++) {
      if (!CATEGORIES.includes(req.body.categories[i])) {
        res.status(400).send({
          message: `Failed! Category ${req.body.categories[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};
