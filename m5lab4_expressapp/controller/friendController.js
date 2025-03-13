// controllers/friendController.js

const { friends, findFriend, filterFriend, updatedFriend, addFriend } = require('../models/friends');

// Get all friends
const getAllFriends = (req, res) => {
  res.json(friends);
};

// Filter friends by gender and/or letter
const filterFriends = (req, res) => {
  const { gender, letter } = req.query;
  const matchingFriends = filterFriend(gender, letter);
  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "You have no friend." });
  }
};

// Get information about the request (headers)
const getRequestInfo = (req, res) => {
  const { "user-agent": userAgent, "content-type": contentType, accept } = req.headers;
  res.json({ userAgent, contentType, accept });
};

// Get a friend by ID
const getFriendById = (req, res) => {
  const friendId = req.params.id;
  const friend = findFriend(friendId);
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: `You have no friend with ID ${friendId}` });
  }
};

// Add a new friend
const addNewFriend = (req, res) => {
  const newFriend = req.body;
  const addedFriend = addFriend(newFriend);
  if (addedFriend) {
    res.status(200).json(addedFriend);
  } else {
    res.status(404).json({ error: "Make sure the new friend object matches the correct pattern" });
  }
};

// Update an existing friend
const updateFriend = (req, res) => {
  const friendId = req.params.id;
  const updatedData = req.body;
  const updated = updatedFriend(friendId, updatedData);
  if (updated) {
    res.json({ result: `Updated friend with ID ${friendId}`, data: updated });
  } else {
    res.status(404).json({ error: `You have no friend with ID ${friendId}` });
  }
};

module.exports = {
  getAllFriends,
  filterFriends,
  getRequestInfo,
  getFriendById,
  addNewFriend,
  updateFriend,
};
