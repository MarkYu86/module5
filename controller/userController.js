// controllers/userController.js

// Sample users list
const users = [
    { id: 1, name: "Anthony Albanese", country: "AU" },
    { id: 2, name: "Joe Biden", country: "US" },
    { id: 3, name: "Chris Hipkins", country: "NZ" },
    { id: 4, name: "Lee Hsien Loong", country: "SG" },
  ];
  
  // Get request headers
  const getHeaders = (req, res) => {
    console.log(req.headers); // Log the request headers to the console
    res.json(req.headers); // Send the headers back in the response as JSON
  };
  
  // Get user by ID
  const getUserById = (req, res) => {
    let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
    let user = users.find((user) => user.id == userId);
    user
      ? res.status(200).json({ result: user })
      : res.status(404).json({ result: `User ${userId} not found` });
  };
  
  // Create a new user
  const createUser = (req, res) => {
    let newUser = req.body; // Get user data from the request body
    console.log(newUser);
  
    // Validation for name and country fields
    if (!newUser.name || !newUser.country) {
      res.status(500).json({ error: "User must contain a name and country" });
      return;
    } else if (!newUser.id) {
      // If no ID, generate one
      newUser.id = users.length + 1;
    }
  
    // Add new user to the list
    users.push(newUser);
    res.status(200).json(newUser); // Return the new user
  };
  
  module.exports = { getHeaders, getUserById, createUser };
  