// ------------------------------------------
// Import the model we created
const User = require('../model/user');
// We're basically "catching" the export that was
// "thrown" to us from user.js in the model folder.
// ------------------------------------------

// ------------------------------------------
// Create an empty array that will contain the
// user model instances that are created.
let users = [];

// Create a few users
let joel = new User("Joel", "Miller", "1")
let ellie = new User("Ellie", "Williams", "2")
let abby = new User("Abby", "Anderson", "3")

// add the user to the array
users.push(joel); // user 1
users.push(ellie); // user 2
users.push(abby); // user 3
// ------------------------------------------


// ------------------------------------------
// Send entire users array as the body of the
// response as json.
exports.getAllUsers = () => {                   // GET ALL
    // Send the whole list of users
    // back to the controller.
    return users;
}

// Retrieve the user in the :index parameter
// of the request and return as json.

exports.getUser = (userID) => {                       // GET SINGLE

    users.forEach(user => {
        if (user.userID == userID)
            return user; // Send back that specific user
    });
}

// Save a user
exports.saveUser = (firstName, lastName) => {                      // POST
    let newUser = new User(firstName, lastName);
    users.push(newUser);

    // Send the whole list of users
    // back to the controller.
    return users;
}

// Complete update
exports.updateUser = (userID, firstName, lastName) => {                      // PUT

    // Find the user to update
    users.forEach(user => {
        if (user.userID == userID) {
            user.firstName = firstName;
            user.lastName = lastName;

            // Send the whole list of users
            // back to the controller.
            return users;
        }
    });

}

// Partial update (AKA "surgical removal")
exports.patchUser = (userID, firstName, lastName) => {                      // PATCH

    // Find the user to update
    users.forEach(user => {

        // If we find the user with that specific ID,
        if (user.userID == userID) {

            // then we update that specific user.
            if (firstName) {                            // If there is anything in the first name,
                users[userID].firstName = firstName;    // then it will execute the update.
            }

            if (lastName) {                             // If there is anything in the last name,
                users[userID].lastName = lastName;      // then it will execute the update.
            }

            // Send the whole list of users
            // back to the controller.
            return users;
        }
    });

    // Send the whole list of users
    // back to the controller.
    return users;

}

// Delete user
exports.deleteUser = (userID) => {                      // DELETE

    users.forEach(user => {
        if (user.userID == userID) {

            // Delete the user with the specific ID
            users.splice(userID, 1);

            // Send the whole list of users
            // back to the controller.
            return users;

        }
    });

    // Send the whole list of users
    // back to the controller.
    return users;

}
// ------------------------------------------