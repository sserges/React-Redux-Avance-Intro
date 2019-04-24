const AuthentificationController = require("./controllers/authentification");

require("./services/passport");
const passport = require("passport");

const requireValidCredentials = passport.authenticate("local", {
  session: false
});
const requireToken = passport.authenticate("jwt", { session: false });

module.exports = function(expressServer) {
  expressServer.post("/signup", AuthentificationController.signup);
  expressServer.get("/ressourceSecrete", requireToken, function(req, res) {
    res.send({ codeDeLaMort: 42 });
  });
  expressServer.post(
    "/signin",
    requireValidCredentials,
    AuthentificationController.signin
  );
};
