const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model.js");

db.role = require("./role.model.js");

db.ROLES = ["user", "admin"];

db.meal = require("./meal.model.js");

db.menuitem = require("./menu-item.model")(mongoose, mongoosePaginate);

db.cart = require("./cart.model");

db.CATEGORIES = ["food", "swallow", "snacks", "dessert", "drinks"];

module.exports = db;
