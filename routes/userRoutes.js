// routes/userRoutes.js

const express = require("express");
const router = express.Router();

// Import controller
const userController = require('../controller/userController');

// Get request headers
router.get("/headers", userController.getHeaders);

// Dynamic request param endpoint - get the user matching the specific ID
router.get("/:id", userController.getUserById);

// POST request to create a new user
router.post("/", userController.createUser);

module.exports = router;
