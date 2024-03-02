const { check } = require("express-validator");

exports.signupValidation = [
  check("name").not().isEmpty().withMessage("nama harus diisi"),
  check("email").isEmail().withMessage("harus alamat email yang valid"),
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 1, max: 2 })
    .withMessage("password tidak lebih dari 6 character"),
];

exports.signinValidation = [
  check("email").isEmail().withMessage("harus alamat email yang valid"),
  check("password")
    .isLength({ min: 1, max: 2 })
    .not()
    .isEmpty()
    .withMessage("password tidak lebih dari 6 character"),
];
