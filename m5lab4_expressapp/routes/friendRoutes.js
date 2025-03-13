// routes/friendRoutes.js

const express = require("express");
const router = express.Router();

// Import controller
const friendController = require('../controller/friendController');

// Default endpoint - get all friends
router.get("/", friendController.getAllFriends);

// Filter friends by gender and/or letter
router.get("/filter", friendController.filterFriends);

// Get information about the request from the headers
router.get("/info", friendController.getRequestInfo);

// Dynamic endpoint to get a friend by ID
router.get("/:id", friendController.getFriendById);

// Add a new friend
router.post("/", friendController.addNewFriend);

// Update an existing friend
router.put("/:id", friendController.updateFriend);

module.exports = router;
