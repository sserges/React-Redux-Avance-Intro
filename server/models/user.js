const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

// Création du model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.isPasswordEqualTo = function(externalPassword, done) {
  bcrypt.compare(externalPassword, this.password, function(err, isMatch) {
    if (err) {
      return done(err);
    }

    done(null, isMatch);
  });
};

userSchema.set("autoIndex", false);
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
