const cartRepository = require("../models/cart-repository");
const mealRepository = require("../models/meal-repository");
const db = require("../models");
const Cart = require("../models/cart.model");

exports.addToCart = async (req, res) => {
  const { mealId } = req.body;
  const userId = req.userId;
  console.log(mealId, "groundnut");
  const quantity = Number.parseInt(req.body.quantity);
  try {
    let cart = await cartRepository.cart(userId);
    console.log(cart, "heyy");
    let mealDetails = await mealRepository.mealById(mealId);
    console.log(mealDetails, "small");
    if (!mealDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }
    //--If Cart Exists ----
    if (cart) {
      //---- check if index exists ----
      // console.log(cart.items[0], "rubbish");
      const indexFound = cart.items.findIndex(
        (item) => item.mealId.id == mealId
      );
      //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  -------
      if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        }
      }
      //----------check if meal exist,just add the previous quantity with the new quantity and update the total price-------
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity =
          cart.items[indexFound].quantity + quantity;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * mealDetails.price;
        cart.items[indexFound].price = mealDetails.price;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----Check if Quantity is Greater than 0 then add item to items Array ----
      else if (quantity > 0) {
        cart.items.push({
          mealId: mealId,
          name: mealDetails.name,
          quantity: quantity,
          price: mealDetails.price,
          total: parseInt(mealDetails.price * quantity),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----if quantity of price is 0 throw the error -------
      else {
        return res.status(400).json({
          type: "Invalid",
          msg: "Invalid request",
        });
      }
      let data = await cart.save();
      res.status(200).json({
        type: "success",
        mgs: "Process Successful",
        data: data,
      });
    }
    //------------ if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created------------
    else {
      const cartData = {
        userId: req.userId,
        items: [
          {
            mealId: mealId,
            name: mealDetails.name,
            quantity: quantity,
            total: parseInt(mealDetails.price * quantity),
            price: mealDetails.price,
          },
        ],
        subTotal: parseInt(mealDetails.price * quantity),
      };
      cart = await cartRepository.addItem(cartData);
      // let data = await cart.save();
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};
exports.getCart = async (req, res) => {
  const userId = req.userId;
  try {
    let cart = await cartRepository.cart(userId);
    if (!cart) {
      return res.status(400).json({
        type: "Invalid",
        msg: "Cart Not Found",
      });
    }
    res.status(200).json({
      status: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

exports.emptyCart = async (req, res) => {
  const userId = req.userId;
  try {
    let cart = await cartRepository.cart(userId);
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res.status(200).json({
      type: "success",
      mgs: "Cart Has been emptied",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

// exports.deleteItem = async (req, res) => {
//   CartItem.findByIdAndRemove(req.params.id, req.body)
//     .then((cartitem) => {
//       res.json(cartitem);
//     })
//     .catch((err) => {
//       res.status(404).send({ message: "Failed", err });
//     });
// };

// exports.deleteItem = async (req, res) => {
//   const userId = req.userId;
//   try {
//     let id = req.params.id;
//     let itemDetails = await cartRepository.cart(userId).removeItem(id);
//     console.log(userId, "details");
//     res.status(200).json({
//       status: true,
//       data: itemDetails,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: false,
//       error: err,
//     });
//   }
// };

exports.deleteItem = async (req, res) => {
  const userId = req.userId;
  const itemIds = req.params.id.split(",");

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    console.log(itemIds, "fiddy-fiddy");
    return res.status(404).send("Cart not found!");
  }
  await Cart.updateOne(
    { userId },
    {
      $pull: {
        items: { mealId: { $in: itemIds } },
      }, // https://www.mongodb.com/docs/manual/reference/operator/update/pullAll/
    }
  );
  const newItem = cart.items.find(obj => JSON.stringify(obj.mealId) === itemIds);
  // console.log(itemIds, "sth");
  // const nawa = cart.items;
  // const mealIdTouched = JSON.stringify(cart.items[0].mealId);
  // const sthelse = mealIdTouched.substring(14, 38);
  console.log(newItem, "stack?");
  //TODO: get the total items you want to delete, add up their prices, subtract the prices from the subtotal, update the cart subtotal.
  res.status(204).send();
};

// const db = require("../models");
// const Meal = db.meal;
// const mealController = require("../controllers/meal.controller");
// const User = require("../models/user.model");
// const Cart = db.user.Cart;

// exports.getCart = async (req, res) => {
//   const userId = req.userId;
//   try {
//     const currentUser = await User.findById(userId);
//     const userCart = currentUser.cart;
//     return userCart;
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };

// exports.addToCart = async (req, res) => {
//   const userId = req.userId;
//   const currentUser = await User.findById(userId);
//   const userCart = await currentUser.cart;
//   const payload = req.body;
//   try {
//     if (!userCart) {
//       await new User({
//         userId,
//       }).save();
//     }
//     console.log(userCart, "user?");
//     userCart.items.push({payload});
//     await userCart.save();
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Adding item to cart failed!" });
//   }
// };

// // exports.addToCart = async (req, res) => {
// //   const userId = req.userId;
// //   const { mealId } = req.body;
// //   const quantity = Number.parseInt(req.body.quantity);
// //   console.log(req.body);
// //   try {
// //     let query = await Cart.find({ userId }).populate({
// //       path: "items.mealId",
// //       select: "name price total",
// //     });
// //     const cart = query;
// //     console.log(query);
// //     let mealDetails = await Meal.findById(mealId);

// //     if (!mealDetails) {
// //       return res.status(500).json({
// //         type: "Not Found",
// //         msg: "Invalid request",
// //       });
// //     }
// //     if (cart) {
// //       const indexFound = cart.items.findIndex(
// //         (item) => item.mealId.id == mealId
// //       );
// //       if (indexFound !== -1 && quantity <= 0) {
// //         cart.items.splice(indexFound, 1);
// //         if (cart.items.length == 0) {
// //           cart.subTotal = 0;
// //         } else {
// //           cart.subTotal = cart.items
// //             .map((item) => item.total)
// //             .reduce((acc, next) => acc + next);
// //         }
// //       } else if (indexFound !== -1) {
// //         cart.items[indexFound].quantity =
// //           cart.items[indexFound].quantity + quantity;
// //         cart.items[indexFound].total =
// //           cart.items[indexFound].quantity * mealDetails.price;
// //         cart.items[indexFound].price = mealDetails.price;
// //         cart.subTotal = cart.items
// //           .map((item) => item.total)
// //           .reduce((acc, next) => acc + next);
// //       } else if (quantity > 0) {
// //         cart.items.push({
// //           mealId: mealId,
// //           quantity: quantity,
// //           price: mealDetails.price,
// //           total: parseInt(mealDetails.price * quantity),
// //         });
// //         cart.subTotal = cart.items
// //           .map((item) => item.total)
// //           .reduce((acc, next) => acc + next);
// //       } else {
// //         return res.status(400).json({
// //           type: "Invalid",
// //           msg: "Invalid request",
// //         });
// //       }
// //       let data = await cart.save();
// //       res.status(200).json({
// //         type: "success",
// //         mgs: "Process Successful",
// //         data: data,
// //       });
// //     } else {
// //       const cartData = {
// //         items: [
// //           {
// //             mealId: mealId,
// //             quantity: quantity,
// //             total: parseInt(mealDetails.price * quantity),
// //             price: mealDetails.price,
// //           },
// //         ],
// //         subTotal: parseInt(mealDetails.price * quantity),
// //       };
// //       cart = await Cart.create(cartData).then((cart) => {
// //         res.status(200).json({ cart: "meal added successfully" });
// //         res.json(cart);
// //       });
// //     }
// //     // let data = await cart.save();
// //   } catch (err) {
// //     console.log(err);
// //     res.status(400).json({
// //       type: "Invalid",
// //       msg: "Something Went Wrong",
// //       err: err,
// //     });
// //   }
// // };
// // exports.addToCart = async (req, res) => {
// //   const userId = req.userId;
// //   const quantity = req.body.items.quantity;

// //   const items = req.body.items;
// //   let cart = await Cart.findOne({ userId });
// //   if (!cart) {
// //     await new Cart({
// //       userId,
// //     }).save();
// //   }
// //   const addedCart = await Cart.updateOne(
// //     { userId },
// //     {
// //       $push: {
// //         items,
// //       },
// //     },
// //     { runValidators: true, new: true }
// //   );
// //   console.log(addedCart, "hmm");
// //   res.status(204).send();
// // };

// exports.deleteItem = async (req, res) => {
//   const userId = req.userId;
//   const itemId = req.params.itemId.split(",");

//   const cart = await Cart.findOne({ userId });
//   if (!cart) {
//     return res.status(404).send("Cart not found!");
//   }
//   await Cart.updateOne(
//     { userId },
//     {
//       $pull: {
//         items: { _id: { $in: itemId } },
//       }, // https://www.mongodb.com/docs/manual/reference/operator/update/pullAll/
//     }
//   );
//   res.status(204).send();
// };

// // Frontend Todo: mealId
// // items.filter(item =>.item.mealId._id === mealId).map(({_id) => _id)
