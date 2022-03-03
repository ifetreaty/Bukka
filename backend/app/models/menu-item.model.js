const mongoose = require("mongoose");

const MenuItem = mongoose.model(
  "MenuItem",
  new mongoose.Schema({
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  })
);

module.exports = MenuItem;
