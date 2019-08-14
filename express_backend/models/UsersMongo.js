const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

const initUser = (username, hashedpassword) => {
  return {
    username: username,
    password: hashedpassword
  };
};
exports.User = User;
exports.initUser = initUser;
