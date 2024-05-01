// The controller is supposed to handle the functions that come in.

// ------------------------------------------
// Import the model we created
const Feed = require('../model/feed');
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

// add the feed post to the array
feed.push(feed1); // Feed post 1
feed.push(feed2); // Feed post 1
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


// Retrieve the feed by the userID
exports.getFeedsByUserID = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("getFeedsByUserID: " + req.params.userID);

    var user_feeds;

    for (i in feed) {
        if (feed[i].userID = req.params.userID) {
            user_feeds.push(feed[i])
        }
    }

    //res.send(feed[req.params.userID]); // Get the userID
}


// Save a feed post
exports.saveFeed = (req, res) => {
    let newFeed = new Feed(req.body.userID, req.body.description, req.body.like, req.body.comment);
    feed.push(newFeed);
    res.setHeader('Content-Type', 'application/json');
    res.send(feed);
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