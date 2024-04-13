// The controller is supposed to handle the functions that come in.

// const createNewUser = async (request,response) => {
//     // Takes in the request, and sends out a response
//     // Parse the user's password.
//     // Save the user to database.
//     // send a reponse out from the function
//     // (could be something like success:true).

//     // The views folder handles sending down HTML

// }

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
let peter = new User("Peter", "Parker")
let john = new User("John", "Doe")

// add the user to the array
users.push(peter); // user 1
users.push(john); // user 2
// ------------------------------------------


// ------------------------------------------
// Send entire users array as the body of the
// response as json.
exports.getAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}

// Retrieve the user in the :index parameter
// of the request and return as json.
exports.getUser = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.index]);
}

// Save a user
exports.saveUser = (req, res) => {
    let newUser = new User(req.body.firstName, req.body.lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
// ------------------------------------------