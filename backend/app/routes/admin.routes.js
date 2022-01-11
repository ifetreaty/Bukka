const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/admin-login.controller");
const { loginAdminUser } = require("../middlewares");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/admin/login", [loginAdminUser.isAdmin], controller.adminLogin);
};