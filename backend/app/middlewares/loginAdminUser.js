const authJwt = require("./authJwt");

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name !== "admin") {
            res.status(403).send({ message: "Forbidden" });
            return;
          }

          next();
        }
      }
    );
  });
};

module.exports = loginAdminUser;