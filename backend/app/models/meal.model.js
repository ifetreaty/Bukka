const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mealSchema = new Schema(
  {
    name: { type: String, required: true }, //worked when changed to true
    description: { type: String, required: false },
    image: { type: String, required: true },
    price: { type: String, required: true }, //make the type "number" here?
    // cloudinary_id: { type: String, required: true }
    // _id: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Meal", mealSchema);