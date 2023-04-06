const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  fullName: String,
  email: String,
  password: String,
  blocked: {
    type: Boolean,
    default: false,
  },

  userRole: {
    type: String,
    roles: ["user", "admin"],
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  activationCode: String,
});

module.exports = mongoose.model("User", userSchema);
