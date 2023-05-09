const express = require("express");
const router = express.Router();
// const { findAlldata } = require("./db");
const UserController = require("../controller/users");

router.get("/", UserController.getAllUsers);

module.exports = router;
