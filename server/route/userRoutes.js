// Require the express library
var express = require('express');

// Create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();

// ------------------------------------------
// These are the routes for the user
const userController = require('../controller/userController'); // Create a route for userController

// Get for ALL users
router.get('/', userController.getAllUsers); // Now get that getAllUsers function in userController

// Get for a SINGLE user
router.get('/:index', userController.getUser);

// POST method
router.post('/', userController.saveUser);

// PUT method
router.put('/:index', userController.updateUser)
            // ^ We need the :index because
            // we're updating a specific user.

// PATCH method
router.patch('/:index', userController.patchUser)

// DELETE method
router.delete('/:index', userController.deleteUser)
// ------------------------------------------

// Add the routes we create within to this
// file to exports so they are accessible
// in the files that require it.
module.exports = router;