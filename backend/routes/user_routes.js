const express = require("express");
const { route } = require("express/lib/application");

const {registerUser, loginUser, logout, forgotPassword} = require("../controller/users_control");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/logout").get(logout);

module.exports = router;