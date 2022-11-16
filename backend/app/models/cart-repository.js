const Cart = require("../models/cart.model");
exports.cart = async (userId) => {
  const carts = await Cart.findOne({userId}).populate({
    path: "items.mealId",
    select: "name price total",
  });
  return carts;
};
exports.cartItemById = async (id) => {
  const item = await Cart.findById(id);
  return item;
};
exports.addItem = async (payload) => {
  const newItem = await Cart.create(payload);
  return newItem;
};
exports.removeItem = async (id) => {
  const item = await Cart.findByIdAndRemove(id);
  return item;
};