const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/User");

router.post("/addnew", usercontroller.add_user);
router.post("/login", usercontroller.user_login);

module.exports = router;
