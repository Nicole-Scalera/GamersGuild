// Require the express library
var express = require('express');

// Create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// ------------------------------------------
// These are the routes for the feed
const feedController = require('../controller/feedController'); // Create a route for feedController

// Get for ALL feed posts
router.get('/', feedController.getAllFeeds); // Now get that getAllFeeds function in feedController

// Get for a SINGLE feed post
router.get('/:index', feedController.getFeed);

// POST method (not like a feed post)
router.post('/', feedController.saveFeed);

// PUT method
router.put('/:index', feedController.updateFeed);

// PATCH method
router.patch('/:index', feedController.patchFeed);

// DELETE method
router.delete('/:index', feedController.deleteFeed);
// ------------------------------------------

// Add the routes we create within to this file to
// exports so they are accessible in the files that
// require it.
module.exports = router;