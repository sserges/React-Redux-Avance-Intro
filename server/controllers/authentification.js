const User = require("../models/user");
const loadsh = require("lodash");

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
        res.json(user);
      });
    }
  });
};
