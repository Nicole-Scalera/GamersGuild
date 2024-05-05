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
exports.getFeed = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedService.getFeed(req.params.index));
}

// Retrieve the feed by the userID
exports.getFeedsByUserID = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Get the feed by the userID
    res.send(feedService.getFeedsByUserID(req.params.userID));
}

// TODO
// Save a feed post
exports.saveFeed = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedService.saveFeed(req.body.userID, req.body.caption));
}

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