const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const multer = require("multer");

require("dotenv").config();

const dbConfig = require("./app/config/db.config");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bukka." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
const Role = require("./app/models/role.model");
const User = require("./app/models/user.model");
const MenuItem = require("./app/models/menu-item.model");
const Category = require("./app/models/category.model");
const bcrypt = require("bcryptjs");

const createAdminUser = async () => {
  try {
    const adminRole = await Role.findOne({
      name: "admin",
    });

    if (adminRole) {
      const adminUsers = await User.find({
        roles: adminRole.id,
      });
      if (adminUsers?.length < 1) {
        await User.create({
          name: "Admin",
          username: "admin",
          email: "admin@bukka.com",
          password: bcrypt.hashSync("password", 8),
          roles: [adminRole.id],
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
  createAdminUser();
}

function initialCateg() {
  Category.estimatedDocumentCount((err, count) => {
    const categories = ["food", "swallow", "snacks", "dessert", "drinks"];
    if (!err && count === 0) {
      categories.forEach((category) => {
        new Category({
          name: `${category}`,
        }).save((err) => {
          if (err) {
            console.log("error", err);
          }

          console.log(`added '${category}' to categories collection`);
        });
      });
    }
  });
}

//TODO: create a .env.example file and add env variable fields w/o values
db.mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
    initialCateg();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(express.static(__dirname + "/public"));

app.use("/api", require("./app/routes/meal.routes"));

app.use("/api", require("./app/routes/file-upload.routes"));

app.use("/api", require("./app/routes/menu.routes"));

app.use("/api", require("./app/routes/cart.routes"));

// allow access to the API from different domains/origins
app.use(
  cors({
    origin: ["http://localhost:8081"],
  })
);
