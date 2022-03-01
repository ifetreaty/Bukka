const express = require("express");
const router = express.Router();
const Meal = require("../models/meal.model");

router.get("/meals", (req, res, next) => {
  Meal.find()
    .then((mealsFromDB) => res.status(200).json(mealsFromDB))
    .catch((err) => next(err));
});

router.post("/meals", (req, res, next) => {
  Meal.create(req.body)
    .then((meal) => {
      res.status(200).json({ meal: "meal added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new meal failed");
    });
});

router.get("/meals/:id", (req, res) => {
  const id = req.params.id;
  Meal.findById(id, function (err, meal) {
    res.json(meal);
  });
});

router.put("/meals/:id", (req, res) => {
  console.log(req.body);
  Meal.findByIdAndUpdate(req.params.id, req.body)
    .then((meal) => {
      res.json(meal);
    })
    .catch((err) => {
      res.status(404).send({ message: "Failed", err });
    });
});

router.delete("/meals/:id", (req, res) => {
  Meal.findByIdAndRemove(req.params.id, req.body)
    .then((meal) => {
      res.status(200).json({
        msg: meal,
      });
    })
    .catch((err) => {
      res.status(404).send({ message: "Failed", err });
    });
});
module.exports = router;
