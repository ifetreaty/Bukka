// const MenuItem = require("../models/menu-item.model");
// const Category = require("../models/category.model");

// const isCategory = (req, res) => {
//   const isFood = (req, res) => {
//     MenuItem.findOne({
//       name: req.body.name,
//     }).exec((err, menuitem) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!menuitem) {
//         return res.status(401).json({ message: "name is invalid" });
//       }

//       Category.find(
//         {
//           _id: { $in: menuitem.categories },
//         },
//         (err, categories) => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           for (let i = 0; i < categories.length; i++) {
//             if (categories[i].name === "food") {
//               next();
//               return;
//             }
//           }
//           res.status(403).send({ message: "Forbidden" });
//         }
//       );
//     });
//   };

//   const isSwallow = (req, res) => {};

//   const isSnack = (req, res) => {};

//   const isDessert = (req, res) => {};

//   const isDrink = (req, res) => {};
// };

// module.exports = { isCategory };
