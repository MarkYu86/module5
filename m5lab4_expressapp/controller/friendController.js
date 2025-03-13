const friends = require('../models/friends');

const findFriend = (id) => {
    return friends.find(friend => friend.id == id);
};


const filterFriend = (gender, letter) => {
    let result = [...friends];

    if (gender) {
        result = result.filter(friend => friend.gender === gender);
    }

    if (letter) {
        result = result.filter(friend => friend.name[0].toLowerCase() === letter.toLowerCase());
    }

    return result;
};

const addFriend = (newFriend) => {
    if (!newFriend.name || !newFriend.gender) {
        return null;
    }
    if (!newFriend.id) {
        newFriend.id = friends.length + 1; 
    }
    friends.push(newFriend);
    return newFriend;
};

const updatedFriend = (id, updatedData) => {
    const index = friends.findIndex(friend => friend.id == id);
    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedData };
        return friends[index];
    }
    return null;
};

module.exports = { findFriend, filterFriend, addFriend, updatedFriend };
