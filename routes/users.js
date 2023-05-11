const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");

router.get("/", UserController.getAllUsers);
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.delete("/:id", UserController.removeUser);

module.exports = router;
