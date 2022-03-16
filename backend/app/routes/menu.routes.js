const express = require("express");
const router = express.Router();
const verifyMenuItem = require("../middlewares/verifyMenuItem");
const controller = require("../controllers/menu.controller");
const { addMenuItem } = require("../middlewares");

router.get("/menu/items", controller.getMenuItems);
router.post(
  "/menu/items",
  [verifyMenuItem.checkDuplicateMealName, verifyMenuItem.checkCategoryExists],
  controller.addMenuItem
);
router.delete("/menu/items/:id", controller.deleteMenuItem);

module.exports = router;
