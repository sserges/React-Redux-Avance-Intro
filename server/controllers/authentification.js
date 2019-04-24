exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  res.send({ test: "blabla" });
};
