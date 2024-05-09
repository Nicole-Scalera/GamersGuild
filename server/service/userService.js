// ------------------------------------------
// Import the model we created
const User = require('../model/user');
const db = require('../db/connection');
// We're basically "catching" the export that was
// "thrown" to us from user.js in the model folder.
// ------------------------------------------

/* // ------------------------------------------
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
 */

// ------------------------------------------
// Send entire users array as the body of the
// response as json.

exports.getAllUsers = async () => {                   // GET ALL
    let users = [];

    let text = "SELECT * FROM gamersguild.users";

    try {

        // Pull the feed from the database
        let res = await db.query(text);

        // Console.log how many rows are detected.
        console.log("response Row Count User: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let userX = new User(res.rows[i].first_name, res.rows[i].last_name, res.rows[i].user_id)
                users.push(userX);
                console.log(res.rows[i])
                console.log(res.rows[i].first_name, res.rows[i].last_name, res.rows[i].user_id)
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"
            }

        }
    } catch (e) {
        console.log(e.stack);
    }

    return users; // Returning the feed object
}

// Retrieve the user in the :index parameter
// of the request and return as json.

exports.getUser = async (userID) => {                       // GET SINGLE
    let users = [];
    // For each post in the feed posts
    let text = "SELECT * FROM gamersguild.users where user_ID=$1";
    let values = [userID]


    try {

        // Pull the feed from the database
        let res = await db.query(text, values);

        // Console.log how many rows are detected.
        console.log("response Row Count for User getUser: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let userX = new User(res.rows[i].first_name, res.rows[i].last_name, res.rows[i].user_id)
                users.push(userX);
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"

            }

        }
    } catch (e) {
        console.log(e.stack);
    }


    return users; // Returning the feed object

}

// Save a user
exports.saveUser = async (firstName, lastName) => {                      // POST
    const text = `INSERT INTO gamersguild.users (first_name, last_name) 
    VALUES ($1,$2)
    RETURNING user_id`;
    const values = [firstName, lastName];

    try {
        const res = await db.query(text, values);
        if (res.rows.length > 0) {
            return res.rows[0];
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log(e.stack);
    }
}

// Complete update
exports.updateUser = async (userID, firstName, lastName) => {                      // PUT

    const text = 'Update gamersguild.users SET first_name = $1, last_name = $2 where user_id = $3 returning user_id';

    const values = [firstName, lastName, userID];

    try {
        const res = await db.query(text, values);
        if (res.rows.length > 0) {
            return res.rows[0];
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log(e.stack);
    }
}


// Partial update (AKA "surgical removal")
exports.patchUser = async (userID, firstName, lastName) => {                      // PATCH

    // Find the user to update
    let text = "Update gamersguild.users SET ";
    let updateFields = "";


    if (firstName.length > 0) {                              // If there is anything in the description,
        updateFields += "first_name ='" + firstName + "'";
    }

    if (lastName.length > 0) {                       // If there is anything in the like,
        updateFields += ", last_name ='" + lastName + "'";
    }


    if (updateFields[0] == ",") {
        updateFields = updateFields.substring(2, updateFields.length)
    }
    text += updateFields + " WHERE user_id ='" + userID + "' returning user_id";


    try {
        const res = await db.query(text);
        if (res.rows.length > 0) {
            return res.rows[0];
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log(e.stack);
    }

}

// Delete user
exports.deleteUser = async (userID) => {                      // DELETE

    const text = 'Delete from gamersguild.users WHERE user_id = $1 returning user_id';

    const values = [userID];

    try {
        const res = await db.query(text, values);
        if (res.rows.length > 0) {
            return res.rows[0];
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log(e.stack);
    }

}
// ------------------------------------------