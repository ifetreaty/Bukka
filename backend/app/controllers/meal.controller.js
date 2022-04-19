const db = require("../models");
const Meal = db.meal;

exports.getMeals = async (req, res) => {
  console.log("hello");
  try {
    let query = Meal.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 4;
    const skip = (page - 1) * pageSize;
    const total = await Meal.countDocuments();

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
      message: "Some error occurred while retrieving meals.",
    });
  }
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
      if (!meal) {
        return res.status(404).json({ message: "Meal not found" });
      }
      res.json(meal);
    })
    .catch((err) => {
      res.status(500).send({ message: "Failed", err });
    });
};
