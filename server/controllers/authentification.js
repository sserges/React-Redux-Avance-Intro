const loadsh = require("lodash");
const jwt = require("jwt-simple");
const passport = require("passport");

const User = require("../models/user");
const config = require("../../config");

function getTokenForUser(user) {
  const timeStamp = new Date().getTime();

  return jwt.encode(
    {
      sub: user.id,
      iat: timeStamp
    },
    config.secret
  );
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function(err, existiongUser) {
    if (err) {
      return next(err);
    }
    if (existiongUser) {
      return res.status(422).send({ error: "Email utilisé" });
    }

    if (loadsh.isEmpty(email) || loadsh.isEmpty(password)) {
      return res.status(422).send({ error: "Email ou mot de passe vide" });
    } else {
      const user = new User({
        email: email,
        password: password
      });
      user.save(function(err) {
        if (err) {
          return next(err);
        }
        res.json({ token: getTokenForUser(user) });
      });
    }
  });
};

exports.signin = function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(500)
        .send({ message: "Les identifiants sont invalides" });
    } else {
      res.json({ token: getTokenForUser(req.user) });
    }
  })(req, res, next);
};
