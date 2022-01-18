const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConfig = {
  HOST: "localhost",
  PORT: 27017,
  DB: "ifetreaty_db"
};

const app = express();

const upload = require("./multer");
const cloudinary = require("./cloudinary")
const fs = require("fs");


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bukka." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
const Role = require("./app/models/role.model");
const User = require("./app/models/user.model");
const bcrypt = require("bcryptjs");

const createAdminUser = async () => {
  try {
    const adminRole = await Role.findOne({
      name: "admin"
    });

    if (adminRole) {
      const adminUsers = await User.find({
        roles: adminRole.id
      });
      if (adminUsers?.length < 1) {
        await User.create({
          name: "Admin",
          username: "admin",
          email: "admin@bukka.com",
          password: bcrypt.hashSync('password', 8),
          roles: [
            adminRole.id
          ]
        })
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
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
  createAdminUser();
}

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.use("/upload-images", upload.array("image"), async (req, res) => {
  
  const uploader = async (path) => await cloudinary.uploads(path, "Images");

  if (req.method === "POST") {
    const urls = []
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    };

    res.status(200).json({
      message: "images uploaded successfully",
      data: urls
    });
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`
    });
  };
});
