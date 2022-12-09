const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
} = require("../controllers/psychologistsCtrl");

// Login Route
router.post("/login", loginController);

// Register Routes
router.post("/register", registerController);

module.exports = router;
