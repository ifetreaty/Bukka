const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept" //i don't understand lines 7 & 8
    );
    next();
  });

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard); //tested on postman? not a frontend route

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};