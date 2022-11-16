const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: { type: String, required: true },
    menuitems: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }],
  })
);

module.exports = Category;
