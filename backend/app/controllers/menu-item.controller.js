const config = require("../config/auth.config");
const db = require("../models");
const MenuItem = db.menuitem;
const Category = require("../models/category.model");

exports.addMenuItem = (req, res) => {
  const menuitem = new MenuItem({
    meal: req.body.meal,
    category: req.body.category,
  });

  menuitem.save((err, menuitem) => {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.categories) {
      Category.find(
        {
          name: { $in: req.body.categories },
        },
        (err, categories) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          menuitem.categories = categories.map((category) => category._id);
          menuitem.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "Menuitem was added successfully!" });
          });
        }
      );
    } else {
      Category.findOne({ name: "food" }, (err, category) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        } //how to add other category options? food || snacks || drinks etc?

        menuitem.categories = [category._id];
        menuitem.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Menuitem was added successfully!" });
        });
      });
    }
  });
};