// The controller is supposed to handle the functions that come in.

// ------------------------------------------

const Feed = require('../model/feed'); // Import the model we created
const db = require('../db/connection');

//const Feed = require('../service/feedService');


// We're basically "catching" the export that was
// "thrown" to us from feed.js in the model folder.
// ------------------------------------------

// ------------------------------------------
// Create an empty array that will contain the
// feed posts model instances that are created.
//let feed = [];

/* // Create a few feed posts
let feed1 = new Feed("1", "1", "Hello, this is a post!", "yes", "This is a comment.")
let feed2 = new Feed("2", "2", "This is yet another post!", "no", "This is another comment.")
let feed3 = new Feed("3", "3", "Wait, a third post?!", "yes", "This is yet a third comment.")
let feed4 = new Feed("4", "1", "Yup, here's a fourth post!", "yes", "This is a fourth comment.")
let feed5 = new Feed("5", "2", "This is a fifth post.", "no", "This is a fifth comment.")
let feed6 = new Feed("6", "3", "A sixth post.", "yes", "This is a sixth comment.")

// add the feed post to the array
feed.push(feed1); // Feed post 1
feed.push(feed2); // Feed post 2
feed.push(feed3); // Feed post 3
feed.push(feed4); // Feed post 4
feed.push(feed5); // Feed post 5
feed.push(feed6); // Feed post 6
// ------------------------------------------
 */

// ------------------------------------------
// We are just doing a return
exports.getAllFeeds = async () => {
    let feed = [];

    let text = "SELECT * FROM feed";

    try {

        // Pull the feed from the database
        let res = await db.query(text);

        // Console.log how many rows are detected.
        console.log("response Row Count: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let feedX = new Feed(res.rows[i].feed_id, res.rows[i].user_id, res.rows[i].feed_description, res.rows[i].feed_like, res.rows[i].comment) // MAKE SURE VARIABLES ARE SINGULAR
                feed.push(feedX);
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"
            }

        }
    } catch (e) {
        console.log(e.stack);
    }

    return feed; // Returning the feed object


}

// Retrieve the feed in the :index parameter
// of the request and return as json.
exports.getFeed = async (feedID) => {
    let feed = [];
    // For each post in the feed posts
    let text = "SELECT * FROM feed where feed_ID=$1";
    let values = [feedID]

    try {

        // Pull the feed from the database
        let res = await db.query(text, values);

        // Console.log how many rows are detected.
        console.log("response Row Count: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let feedX = new Feed(res.rows[i].feed_id, res.rows[i].user_id, res.rows[i].feed_description, res.rows[i].feed_like, res.rows[i].comment) // MAKE SURE VARIABLES ARE SINGULAR
                feed.push(feedX);
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"
            }

        }
    } catch (e) {
        console.log(e.stack);
    }

    feed.forEach(myfeed => {
        console.log("Feed Array Feed ID: " + myfeed.feedID);
    }

    );

    return feed; // Returning the feed object
}

// Retrieve the feed by the userID
exports.getFeedsByUserID = async (userID) => {

    let feed = [];

    // For each post in the feed posts
    let text = "SELECT * FROM feed where user_id=$1";
    let values = [userID]

    try {

        // Pull the feed from the database
        let res = await db.query(text, values);

        // Console.log how many rows are detected.
        console.log("response Row Count: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let feedX = new Feed(res.rows[i].feed_id, res.rows[i].user_id, res.rows[i].feed_description, res.rows[i].feed_like, res.rows[i].comment) // MAKE SURE VARIABLES ARE SINGULAR
                feed.push(feedX);
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"
            }

        }
    } catch (e) {
        console.log(e.stack);
    }

    feed.forEach(myfeed => {
        console.log("In getFeedsbyUserID Feed Array Feed ID: " + myfeed.feedID);
    }

    );

    return feed; // Returning the feed object

}

// TODO - Update this for feedService
// Save a feed post
exports.saveFeed = async (userID, caption) => {

    const text = `INSERT INTO gamersguild.feed (user_ID, feed_description) 
    VALUES ($1,$2)
    RETURNING feed_id`;
    const values = [userID, caption];

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

// TODO - Update this for feedService
// Complete update of feed post
exports.updateFeed = async (feedID, description, like, comment) => {

    const text = 'Update gamersguild.feed SET feed_description = $1, feed_like = $2, comment = $3 where feed_id = $4 returning feed_id';

    const values = [description, like, comment, feedID];

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

// TODO - Update this for feedService
// Partial update of feed post (AKA "surgical removal")
exports.patchFeed = async (feedID, description, like, comment) => {                      // PATCH

    let text = "Update gamersguild.feed SET ";
    let updateFields = "";


    if (description.length > 0) {                              // If there is anything in the description,
        updateFields += "feed_description ='" + description + "'";
    }

    if (like.length > 0) {                       // If there is anything in the like,
        updateFields += ", feed_like ='" + like + "'";
    }

    if (comment.length > 0) {                       // If there is anything in the comment,
        updateFields += ", comment ='" + comment + "'";  // then it will execute the update.
    }


    if (updateFields[0] == ",") {
        updateFields = updateFields.substring(2, updateFields.length)
    }
    text += updateFields + " WHERE feed_id ='" + feedID + "' returning feed_id";


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


// TODO - Update this for feedService
// Delete feed post
exports.deleteFeed = async (feedID) => {                      // DELETE

    const text = 'Delete from gamersguild.feed WHERE feed_id = $1 returning feed_id';

    const values = [feedID];

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