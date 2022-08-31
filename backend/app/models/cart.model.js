const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema(
    {
      "userId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      "items": [
        {
          "productId": {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal",
          },
          "name": String,
          "price": Number,
          "quantity": {
            type: Number,
            required: true,
            min: [1, "Quantity can not be less then 1."],
            default: 1,
          },
          "total": Number,
        },
      ],
      "subtotal": {
        type: Number,
        required: true,
        default: 0,
      },
      "active": {
        type: Boolean,
        default: true,
      },
      "modifiedOn": {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  )
);

module.exports = Cart;
