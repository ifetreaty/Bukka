const db = require("../models");
const Cart = db.cart;
const Meal = db.meal;

exports.getCartItems = async (req, res) => {
  const userId = req.userId;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      res.send(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

exports.addToCart = async (req, res) => {
  const userId = req.userId;
  const quantity = req.body.items.quantity;

  const items = req.body.items;
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    await new Cart({
      userId,
    }).save();
  }
  const addedCart = await Cart.updateOne(
    { userId },
    {
      $push: {
        items,
      },
    },
    { runValidators: true, new: true }
  );
  console.log(addedCart, "fido");
  res.status(204).send();
};

exports.deleteItem = async (req, res) => {
  const userId = req.userId;
  const itemId = req.query.itemId.split(",");

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).send("Cart not found!");
  }
  await Cart.updateOne(
    { userId },
    {
      $pull: {
        items: { _id: { $in: itemId } },
      }, // https://www.mongodb.com/docs/manual/reference/operator/update/pullAll/
    }
  );
  res.status(204).send();
};

// Frontend Todo: mealId
// items.filter(item =>.item.mealId._id === mealId).map(({_id) => _id)