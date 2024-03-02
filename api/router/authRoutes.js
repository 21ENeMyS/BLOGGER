const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/authController");

const { runValidationResult } = require("../validations/");
const {
  signupValidation,
  signinValidation,
} = require("../validations/authValidation");

router.post("/signup", runValidationResult, signupValidation, signup);
router.post("/signin", runValidationResult, signinValidation, signin);

module.exports = router;
