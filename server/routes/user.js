const express = require("express");
const {
  register,
  login,
  auth,
  getAllUsers,
  updateUser,
  verifyUser,
} = require("../controlers/user.controler");
const { registerRules, validatorr } = require("../middlewares/validator");
const { verifyAuth } = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/register", registerRules(), validatorr, register);

router.post("/login", login);
// router.post("/auth/verifyUser/:activationCode", verifyUser);

router.get("/auth", verifyAuth, auth);

router.get("/usersList", getAllUsers);

router.put("/update/:_id", updateUser);
module.exports = router;
