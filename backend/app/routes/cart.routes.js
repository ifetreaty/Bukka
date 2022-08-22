const express = require("express");
const router = express.Router();
const controller = require("../controllers/cart.controller");
const { authJwt } = require("../middlewares");
const cartValidation = require("../middlewares/cart.validator");

router.get("/cart", authJwt.verifyToken, controller.getCartItems);
router.post("/cart", authJwt.verifyToken, cartValidation, controller.addToCart);
router.delete("/cart/:itemId", authJwt.verifyToken, controller.deleteItem);

module.exports = router;
