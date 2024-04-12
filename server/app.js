// http://localhost:1337
// ^ CLICK ME

const PORT = process.env.PORT || 1337;
             // If this process.env port is
             // not defined, then 1337 is chosen.

const express = require('express'); // Express is a dependency that needs
const app = express();              // to be installed through the terminal.

// // This is including the userRoute route.
// // It links it to that directory.
// let userRoutes = require('.route/userRoute');

// Allows us to access public files.
app.use(express.static('./client/public')); // Middleware
// DO NOT ADD MORE THAN ONE DOT HERE!!!
// When application runs, the app.js directs
// the server to that location.




// Route Handler for Homepage ---------------------
app.get(['/', '/index.html'], function (req, res) {
//        ^ The '/' goes to the homepage of the app.
    res.sendFile('index.html', { root: './client/views' })
})                               // Serving up the public folder
                                 // by the dot here.

// Notes:
//      - This is what you get back: a file named 'index.html' that displays the homepage.
//      - In "res.sendFile," res is the "response," which is what the client actually gets.

// ------------------------------------------------


// Route Handler for Profile ----------------------
app.get('/profile', function(req, res) {
    res.sendFile('profile.html', { root: './client/views' })
})
// ------------------------------------------------


// Route Handler for Login Page -------------------
app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: './client/views' })
})
// ------------------------------------------------


// Route Handler for Feed -------------------------
app.get('/feed/:username', function (req, res) {            // computer understands the
    res.sendFile('feed.html', { root: './client/views' })   // username parameter.
})
// ------------------------------------------------


// Route Handler for Post -------------------------
app.get('/api/posts', function (req, res) {
    res.json({
        data:[
            {
                id:1,
                title:"rah"
            }
        ]
    });
})
// ------------------------------------------------


// Port Information in Console --------------------
app.listen(PORT, () => console.log('Marist Chatter listening on this port ' + PORT + '!')); // NOT hardcoded.
// Notes:
//      - app.listen is basically the notification bell.
//          - E.g. someone's extension number on a phone number.
//      - console.log gives info to the user
//      - We need to make a variable for this port.
//          - You can make the port number (in this case, '1337')
//          pretty much anything you want.
// ------------------------------------------------


// ARCHIVED NOTES ---------------------------------
//
//      For page 1
//      app.get('/page1.html', function (req, res) {
//          res.sendFile('page1.html', { root: './' })
//      })
//
//
//
//
// ------------------------------------------------