const db = require("../models");
const MenuItem = db.menuitem;

const getPagination = (page, size) => {
  const limit = size ? +size : 8;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

exports.getMenuItems = (req, res) => {
  const { page, size, category } = req.query;
  var condition = category
    ? { category: { $regex: new RegExp(category), $options: "i" } }
    : {};
  const { limit, offset } = getPagination(page, size);
  MenuItem.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        menuItems: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving menu items.",
      });
    });
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
