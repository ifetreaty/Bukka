const db = require("../models");
const Cart = db.cart;
const Meal = db.meal;

exports.getCartItems = async (req, res) => {
  const userId = req.userId;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else {
      res.status(404).json({message: "Cart not found"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Something went wrong!"});
  }
};

exports.addToCart = async (req, res) => {
  const userId = req.userId;
  // const { productId, quantity } = req.body;
  const productId = req.body.items.productId;
  const quantity = req.body.items.quantity;

  // for(let i = 0; )

  try {
    let cart = await Cart.findOne({ userId });
    let item = await Meal.findOne({ _id: productId });
    if (!item) {
      console.log(userId);
      res.status(404).json({message: "Meal not found!"});
    }
    const {price, name} = item;

    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId, name, quantity, price });
      }
      cart.total += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price }],
        total: quantity * price,
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

// exports.addToCart = (req, res) => {
//   Cart.create(req.body)
//     .then((cart) => {
//       res.status(200).json({ cart: "item added successfully" });
//     })
//     .catch((err) => {
//       res.status(400).send("adding new item failed");
//     });
// };

exports.deleteItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.itemId;
  try{
      let cart = await Cart.findOne({userId});
      let itemIndex = cart.items.findIndex(p => p.productId == productId);
      if(itemIndex > -1)
      {
          let productItem = cart.items[itemIndex];
          cart.total -= productItem.quantity * productItem.price;
          cart.items.splice(itemIndex,1);
      }
      cart = await cart.save();
      return res.status(201).send(cart);
  }
  catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
  }
}