// ------------------------------------------
// Import the model we created
const userService = require('../service/userService');
// We're basically "catching" the export that was
// "thrown" to us from user.js in the model folder.
// ------------------------------------------

// ------------------------------------------
// Send entire users array as the body of the
// response as json.
exports.getAllUsers = (req, res) => {                   // GET ALL
    res.setHeader('Content-Type', 'application/json');
    // ^ setHeader tells the browser what
    // format of content to send back.

    // Send back a reponse to the Postman
    res.send(userService.getAllUsers()); // Send back all users
}

// Retrieve the user in the :index parameter
// of the request and return as json.

exports.getUser = (req, res) => {                       // GET SINGLE
    res.setHeader('Content-Type', 'application/json');

    // Returning a specific user from an ID
    res.send(userService.getUser(req.params.userID));
}

// Save a user
exports.saveUser = (req, res) => {                      // POST
    res.setHeader('Content-Type', 'application/json');

    // Save a specific user from their ID, firstName, and lastName.
    res.send(userService.saveUser(req.params.userID, req.body.firstName, req.body.lastName));
}

// Complete update
exports.updateUser = (req, res) => {                      // PUT

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;        // See notes on why we put certain
    const firstName = req.body.firstName;   // things as param and others as body.
    const lastName = req.body.lastName;

    // Update a specific user from their ID, firstName, and lastName.
    res.send(userService.updateUser(userID, firstName, lastName));

}

// Partial update (AKA "surgical removal")
exports.patchUser = (req, res) => {                      // PATCH

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // No if statements needed here because all the
    // parsing is done in the userService.js file.

    // Send back the user with a partial update
    res.send(userService.patchUser(userID, firstName, lastName));

}

// Delete user
exports.deleteUser = (req, res) => {                      // DELETE

    // Create consts to access the elements
    // of a User class.
    const userID = req.params.index;

    // Send back the user with that specific ID
    res.send(userService.deleteUser(userID));

}
// ------------------------------------------