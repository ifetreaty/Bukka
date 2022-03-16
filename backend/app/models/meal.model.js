const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Meal", mealSchema);
