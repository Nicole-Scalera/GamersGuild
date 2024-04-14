// The controller is supposed to handle the functions that come in.

// ------------------------------------------
// Import the model we created
const Feed = require('../model/feed');
// We're basically "catching" the export that was
// "thrown" to us from feed.js in the model folder.
// ------------------------------------------

// ------------------------------------------
// Create an empty array that will contain the
// user model instances that are created.
let feed = [];

// Create a few users
let feed1 = new Feed("1", "Hello, this is a post!", "yes", "This is a comment.")

// add the feed post to the array
feed.push(feed1); // Feed post 1
// ------------------------------------------

// ------------------------------------------
// Send entire feed array as the body of the
// response as json.
exports.getAllFeeds = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feed);
}

// Retrieve the feed in the :index parameter
// of the request and return as json.
exports.getFeed = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feed[req.params.index]);
}

// Save a feed post
exports.saveFeed = (req, res) => {
    let newFeed = new Feed(req.body.userID, req.body.description, req.body.like, req.body.comment);
    feed.push(newFeed);
    res.setHeader('Content-Type', 'application/json');
    res.send(feed);
}
// ------------------------------------------