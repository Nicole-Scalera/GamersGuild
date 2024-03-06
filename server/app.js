// http://localhost:1337
// ^ CLICK ME

const PORT = process.env.PORT || 1337;
             // if this process.env port is
             // not defined, then 1337 is chosen.

const express = require('express'); // Express is a dependency that needs
const app = express();              // to be installed through the terminal.

app.use(express.static('client/public')); // Allows us to access public files.
// Middleware

// the '/' goes to the homepage of the app
app.get(['/', '/index.html'], function (req, res) {
    // This is what you get back: a file named 'index.html' that displays the homepage
    res.sendFile('index.html', { root: './client/views' })
    // res is the "response," what the client actually gets
})

// For page 1
// app.get('/page1.html', function (req, res) {
//     res.sendFile('page1.html', { root: './' })
// })

app.get('/profile', function(req, res) {
    res.sendFile('profile.html', { root: './client/views' })
})

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

// app.listen is basically the notification bell.
// E.g. someone's extension number on a phone number.
app.listen(PORT, () => console.log('Marist Chatter listening on this port ' + PORT + '!')); // NOT hardcoded.
// console.log gives info to the user
// We need to make a variable for this port.
// You can make '1337' pretty much anything you want.


