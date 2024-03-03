const express = require('express'); // need to install exp dependency (require indicates a dependency)
const app = express();

// the '/' goes to the homepage of the app
app.get(['/', '/index.html'], function (req, res) {
    // This is what you get back: a file named 'index.html' that displays the homepage
    res.sendFile('index.html', { root: './client/views' })
    // res is the "response," what the client actually gets
})

app.get('/page1.html', function (req, res) {
    res.sendFile('page1.html', { root: './' })
})

app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));