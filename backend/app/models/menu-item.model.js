const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const menuItemSchema = new Schema({
  meal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meal",
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = model("MenuItem", menuItemSchema);
