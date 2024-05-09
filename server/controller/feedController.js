// The controller is supposed to handle the functions that come in.

// ------------------------------------------

const feedService = require('../service/feedService');

// ------------------------------------------

// ------------------------------------------
// Send entire feed array as the body of the
// response as json.
exports.getAllFeeds = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(await feedService.getAllFeeds()); // Perform a GET ALL of feeds
}

// Retrieve the feed in the :index parameter
// of the request and return as json.
exports.getFeed = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(await feedService.getFeed(req.params.index));
}

// Retrieve the feed by the userID
exports.getFeedsByUserID = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Get the feed by the userID
    res.send(await feedService.getFeedsByUserID(req.params.userID));
}

// TODO
// Save a feed post
exports.saveFeed = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(await feedService.saveFeed(req.body.userID, req.body.description));
}

// Complete update of feed post
exports.updateFeed = async (req, res) => {                      // PUT

    // Create consts to access the elements
    // of a Feed class.
    const feedID = req.params.index;
    const description = req.body.description;
    const like = req.body.like;
    const comment = req.body.comment;

    // Send back a reponse to the Postman
    res.send(await feedService.updateFeed(feedID, description, like, comment)); // Send back that specific feed post

}

// Partial update of feed post (AKA "surgical removal")
exports.patchFeed = async (req, res) => {                      // PATCH

    // Create consts to access the elements
    // of a User class.
    let feedID = "";
    let description = "";
    let like = "";
    let comment = "";


    if (req.params.index) feedID = req.params.index;
    if (req.body.description) description = req.body.description;
    if (req.body.like) like = req.body.like;
    if (req.body.comment) comment = req.body.comment;
    // Send back a reponse to the Postman
    res.send(await feedService.patchFeed(feedID, description, like, comment)); // Send the whole list of feed posts

}

// Delete feed post
exports.deleteFeed = async (req, res) => {                      // DELETE

    // Create consts to access the elements
    // of a Feed class.
    const feedID = req.params.index;
    // Send back a reponse to the Postman
    res.send(await feedService.deleteFeed(feedID));

}
// ------------------------------------------