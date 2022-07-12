const express = require("express");

const {registerUser} = require("../controller/users_control");

const router = express.Router();

router.route("/register").post(registerUser);

module.exports = router;