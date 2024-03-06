const { check } = require("express-validator");

exports.signupValidation = [
  check("name").not().isEmpty().withMessage("nama harus diisi"),
  check("email").isEmail().withMessage("harus alamat email yang valid"),
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 6, max: 8 })
    .withMessage("password tidak lebih dari 8 character"),
];

exports.signinValidation = [
  check("email").isEmail().withMessage("harus alamat email yang valid"),
  check("password")
    .isLength({ min: 6, max: 8 })
    .not()
    .isEmpty()
    .withMessage("password tidak lebih dari 8 character"),
];
