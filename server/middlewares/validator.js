const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName", "This field is required").notEmpty(),
  check("email", "This field is required").notEmpty(),
  check("email", "You  have to enter a valid email").isEmail(),
  check(
    "password",
    "The password should contain at least 6 characters!"
  ).isLength({ min: 6 }),
];

exports.validatorr = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
