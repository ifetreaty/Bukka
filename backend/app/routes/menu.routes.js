const express = require("express");
const router = express.Router();
const { verifyMenuItem } = require("../middlewares");
const controller = require("../controllers/menu-item.controller");
const { addMenuItem } = require("../middlewares");

router.post(
  "/auth/addmenuitem",
  [
    verifyMenuItem.checkDuplicateMealName, 
    verifyMenuItem.checkCategoriesExist,
  ],
  controller.addMenuItem
);

module.exports = router;
