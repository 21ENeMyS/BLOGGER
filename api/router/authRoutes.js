const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  requireSignin,
  signout,
} = require("../controllers/authController");

const { runValidationResult } = require("../validations/");
const {
  signupValidation,
  signinValidation,
} = require("../validations/authValidation");

router.post("/signup", signupValidation, runValidationResult, signup);
router.post("/signin", signinValidation, runValidationResult, signin);
router.get("/signout", requireSignin, signout);
// router.get("/secret", requireSignin, (req, res) => {
//   res.json({ message: "halaman rahasia diperbolehkan" });
// });

module.exports = router;
