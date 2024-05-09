// This will define the shape of a post/feed
// that gets stored in the database.

//TODO Added feedID
// Class for a feed post
class Feed {
    constructor(feedID, userID, description, like, comment) {
        this.feedID = feedID
        this.userID = userID;           // Who posted it?
        this.description = description; // What's the description?
        this.like = like;               // Is it liked, or not?
        this.comment = comment;         // Will you leave a comment?
    }
}

// Using an array called exports, this Feed
// class is like a module, and can be called
// in other places.
module.exports = Feed; // This is apart of Node
// This will be called later in <>