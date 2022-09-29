const db = require("../models");
const MenuItem = db.menuitem;

exports.getMenuItems = async (req, res) => {
  try {
    let query = MenuItem.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * pageSize;
    const total = await MenuItem.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    // if (page > pages) {
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "No page found",
    //   });
    // }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Some error occurred while retrieving menu items.",
    });
  }
};

exports.addMenuItem = (req, res) => {
  const menuItem = new MenuItem({
    meal: req.body.mealId,
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

exports.getMenuItemsInCategory = async (req, res) => {
  try {
    let query = MenuItem.find({ category: req.params.id });
    query = query.populate("meal");

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * pageSize;
    const total = await MenuItem.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Some error occurred while retrieving menu items.",
    });
  }
};
