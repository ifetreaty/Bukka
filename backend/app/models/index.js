const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model.js");

db.ROLES = ["user", "admin"];

db.menuitem = require("./menu-item.model");

db.CATEGORIES = ["food", "swallow", "snacks", "dessert", "drinks"];

module.exports = db;
