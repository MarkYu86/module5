const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const {
  findFriend,
  filterFriend,
  updatedFriend,
  addFriend,
} = require("m5lab4_expressapp/models/friends.js");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  const { gender, letter } = req.query;
  const matchingFriend = filterFriend(gender, letter);
  if (matchingFriend.length > 0) {
    res.status(200).json(matchingFriend);
  } else {
    res.status(404).json({ error: "you have no friend." });
  }
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  //   console.log(req.headers);
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept: accept,
  } = req.headers;
  res.json({ userAgent, contentType, accept });

  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json({ userAgent, contentType, accept });
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  //   console.log(req.params);
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path
  let friend = findFriend(friendId);
  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  // Modify this response with the matched friend, or a 404 if not found
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: `you have no friend ${friendId}` });
  }
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  //   console.log(newFriend); // 'body' will now be an object containing data sent via the request body
  // we can add some validation here to make sure the new friend object matches the right pattern
  let addedFriend = addFriend(newFriend);
  // if the new friend is valid, add them to the list and return the successfully added object
  if (addedFriend) {
    res.status(200).json(addedFriend);
  } else {
    res.status(404).json({
      error: "make sure the new friend object matches the right pattern",
    });
  }
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedData = req.body;

  // Replace the old friend data for friendId with the new data from updatedFriend
  const updated = updatedFriend(friendId, updatedData);
  // Modify this response with the updated friend, or a 404 if not found
  if (updated) {
    res.json({
      result: "Updated friend with ID " + friendId,
      data: updated,
    });
  } else {
    res.status(404).json({ error: `you have no friend.${friendId}` });
  }
});

module.exports = router;
