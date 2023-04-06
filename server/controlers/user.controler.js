const User = require("../model/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { sendConfirmationMail } = require("../nodemail");

const secret = config.get("secret");

exports.register = async (req, res) => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let activationCode = "";
  for (let i = 0; i < 25; i++) {
    activationCode += characters[Math.floor(Math.random() * characters.length)];
  }

  const { fullName, email, password } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(409).json({ msg: "User already exists" });
  } else {
    try {
      const newUser = new User({
        fullName,
        email,
        password,
        activationCode: activationCode,
      });
      let salt = await bcryptjs.genSalt(10);
      let hash = await bcryptjs.hash(password, salt);
      newUser.password = hash;

      await newUser.save();
      const payload = {
        _id: newUser._id,
      };

      let token = jwt.sign(payload, secret);

      res.send({
        token,
        user: {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          userRole: newUser.userRole,
        },
      });
      // send email via nodemailer
      // sendConfirmationMail(newUser.email, newUser.activationCode);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Wrong Informations" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "Wrong Informations" });

    //verification of the activation through sending email
    // if (user && isMatch && !user.isActive)
    //   return res
    //     .status(404)
    //     .json({ msg: "You should open your Inbox to activate your account" });
    const payload = {
      _id: user._id,
    };

    let token = jwt.sign(payload, secret);

    res.send({
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userRole: user.userRole,
        blocked: user.blocked,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    allUsers
      ? res.status(201).json(allUsers)
      : res.status(401).json({ msg: "getAllUsers error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updatedUser);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};

exports.verifyUser = (req, res) => {
  User.find({ activationCode: req.params.activationCode }).then((user) => {
    if (!user) {
      res.send({ msg: "This activation code doesn't exist" });
    } else {
      user.isActive = true;
      user.save();
      res.send({ msg: "Your account is activated now!" });
    }
  });
};
