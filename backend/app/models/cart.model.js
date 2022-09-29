const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Meal = require("./meal.model.js");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        mealId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Meal",
          validate: {
            message: "Meal not found!",
            validator: async function (value) {
              const meal = await Meal.findById(value);
              if (!meal) {
                return false;
              }
              return true;
            },
          },
        },
        // "name": String,
        // "price": Number,
        // "quantity": {
        //   type: Number,
        //   required: true,
        //   min: [1, "Quantity can not be less then 1."],
        //   default: 1,
        // },
        // "total": Number,
      },
    ],

    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
CartSchema.virtual("subtotal", {
  ref: "Meal",
  localField: "items.mealId",
  foreignField: "_id",
  justOne: true,
}).get(function () {
  const subtotal = this.items.reduce((items, item) => items += Number(item.mealId.price), 0);
  return subtotal;
});

CartSchema.pre("find", function (next) {
  this.populate("items.mealId");
  this.populate("subtotal");
  next();
});

CartSchema.pre("findOne", function(next) {
  this.populate("items.mealId");
  this.populate("subtotal");
  next();
})
const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
