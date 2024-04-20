// This will define the shape of a user that
// gets stored in the database. When we talk
// about shape, we're talking about an object.

class User {
    constructor(firstName, lastName, userID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userID = userID;
    }
}

// Using an array called exports, this user
// class is like a module, and can be called
// in other places.
module.exports = User; // This is apart of Node
// This will be called later in userController.js