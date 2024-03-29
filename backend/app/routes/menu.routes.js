const express = require("express");
const router = express.Router();
const verifyMenuItem = require("../middlewares/verifyMenuItem");
const controller = require("../controllers/menu.controller");
const { authJwt } = require("../middlewares");

router.get("/menu/items", authJwt.verifyToken, controller.getMenuItems);
router.post(
  "/menu/items",
  authJwt.verifyToken,
  [verifyMenuItem.checkDuplicateMealName, verifyMenuItem.checkCategoryExists],
  controller.addMenuItem
);
router.delete(
  "/menu/items/:id",
  authJwt.verifyToken,
  controller.deleteMenuItem
);
router.get(
  "/menu/items/category/:id",
  controller.getMenuItemsInCategory
);

module.exports = router;
