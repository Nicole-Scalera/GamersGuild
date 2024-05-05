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
let feed = [];

// Create a few feed posts
let feed1 = new Feed("1", "Hello, this is a post!", "yes", "This is a comment.")
let feed2 = new Feed("2", "This is yet another post!", "no", "This is another comment.")
let feed3 = new Feed("3", "Wait, a third post?!", "yes", "This is yet a third comment.")
let feed4 = new Feed("1", "Yup, here's a fourth post!", "yes", "This is a fourth comment.")
let feed5 = new Feed("2", "This is a fifth post.", "no", "This is a fifth comment.")
let feed6 = new Feed("3", "A sixth post.", "yes", "This is a sixth comment.")

// add the feed post to the array
feed.push(feed1); // Feed post 1
feed.push(feed2); // Feed post 2
feed.push(feed3); // Feed post 3
feed.push(feed4); // Feed post 4
feed.push(feed5); // Feed post 5
feed.push(feed6); // Feed post 6
// ------------------------------------------


// ------------------------------------------
// We are just doing a return
exports.getAllFeeds = async () => {

    let text = "SELECT * FROM feed";

    try {

        // Pull the feed from the database
        let res = await db.query(text);

        // Console.log how many rows are detected.
        console.log("response: " + res.rowCount)

        // If the number of rows is greater than 0...
        if (res.rows.length > 0) {

            // Get the data from the database (e.g. username, feed description),
            // and populate the same array that we've been using.
            for (let i = 0; i < res.rows.length; i++) {

                // Loop through any number of rows in the database (see pgAdmin4 application).
                let feedX = new Feed(res.rows[i].userID, res.rows[i].feed_description, res.rows[i].feed_like, res.rows[i].comments)
                feed.push(feedX);
                // ^^^ Named it feedX because the computer confuses the
                // feed variable with the actual array named "feed"
            }

            // Console.log the data found
            console.log("Data Found: " + res.rowCount);
        }
    } catch (e) {
        console.log(e.stack);
    }

    return feed; // Returning the feed object


}

// Retrieve the feed in the :index parameter
// of the request and return as json.
exports.getFeed = (feedID) => {
    // For each post in the feed posts
    for (i in feed) {
        // If a request comes for a certain feedID,
        // search for it in the list and return that
        // specific post of that ID.
        if (feed[i].feedID == feedID) {
            return feed[i];
        }
    }
}

// Retrieve the feed by the userID
exports.getFeedsByUserID = (userID) => {

    // Create an empty array
    var user_feeds = [];

    // For each post in the feed, sort the given
    // feed post to its relevant user.
    for (i in feed) {
        if (feed[i].userID == userID) {
            user_feeds.push(feed[i])
        }
    }

    // Return the user feeds
    return user_feeds;
}

// TODO - Update this for feedService
// Save a feed post
exports.saveFeed = (userID, caption) => {
    let newFeed = new Feed(userID, caption);
    feed.push(newFeed);
    return feed;
}

// TODO - Update this for feedService
// Complete update of feed post
exports.updateFeed = (req, res) => {                      // PUT

    // Create consts to access the elements
    // of a Feed class.
    const feedID = req.params.index;
    const userID = req.body.userID;
    // ^ userID is apart of the body,
    // unlike in userController.js
    const description = req.body.description;
    const like = req.body.like;
    const comment = req.body.comment;

    // Update feed with new data
    feed[feedID] = new Feed(userID, description, like, comment);
    //    ^ Get index of feed post

    // Send back a reponse to the Postman
    res.send(feed[feedID]); // Send back that specific feed post

}

// TODO - Update this for feedService
// Partial update of feed post (AKA "surgical removal")
exports.patchFeed = (req, res) => {                      // PATCH

    // Create consts to access the elements
    // of a User class.
    const feedID = req.params.index;
    const userID = req.body.userID;
    const description = req.body.description;
    const like = req.body.like;
    const comment = req.body.comment;

    // Update user with new data
    if (userID) {                            // If there is anything in the userID,
        feed[feedID].userID = userID;        // then it will execute the update.
    }

    if (description) {                              // If there is anything in the description,
        feed[feedID].description = description;     // then it will execute the update.
    }

    if (like) {                       // If there is anything in the like,
        feed[feedID].like = like;     // then it will execute the update.
    }

    if (comment) {                       // If there is anything in the comment,
        feed[feedID].comment = comment;  // then it will execute the update.
    }

    // Send back a reponse to the Postman
    res.send(feed); // Send the whole list of feed posts

}

// TODO - Update this for feedService
// Delete feed post
exports.deleteFeed = (req, res) => {                      // DELETE

    // Create consts to access the elements
    // of a Feed class.
    const feedID = req.params.index;

    // Delete the feed post with the specific ID
    feed.splice(feedID, 1);

    // Send back a reponse to the Postman
    res.send(feed); // Send the whole list of feed posts

}
// ------------------------------------------