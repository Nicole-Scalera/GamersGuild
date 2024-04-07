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
// Create an empty array that will contain the
// user model instances that are created.
let users = [];

// Create a user
let peter = User.createUser("Peter", "Parker")

// add the user to the array
users.push(peter);
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
    let newUser = User.createUser(req.body.firstName, req.body.lastName);
    users.push(newUser);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
}
// ------------------------------------------