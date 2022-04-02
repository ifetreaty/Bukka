const db = require("../models");
const Meal = db.meal;

const getPagination = (page, size) => {
  const limit = size ? +size : 8;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

exports.getMeals = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  const { limit, offset } = getPagination(page, size);
  Meal.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        meals: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving meals.",
      });
    });
};

exports.addNewMeal = (req, res) => {
  Meal.create(req.body)
    .then((meal) => {
      res.status(200).json({ meal: "meal added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new meal failed");
    });
};

exports.deleteMeal = (req, res) => {
  Meal.findByIdAndRemove(req.params.id, req.body)
    .then((meal) => {
      res.status(200).json({
        msg: meal,
      });
    })
    .catch((err) => {
      res.status(404).send({ message: "Failed", err });
    });
};

exports.getMeal = (req, res) => {
  const id = req.params.id;
  Meal.findById(id, function (err, meal) {
    res.json(meal);
  });
};

exports.editMeal = (req, res) => {
  console.log(req.body);
  Meal.findByIdAndUpdate(req.params.id, req.body)
    .then((meal) => {
      res.json(meal);
    })
    .catch((err) => {
      res.status(404).send({ message: "Failed", err });
    });
};
