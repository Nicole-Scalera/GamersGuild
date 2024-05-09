const user_feeds = document.getElementById("user_feeds")
const user_name_section = document.getElementById("Logged_in_user")
const base_url = "http://localhost:1337"

// --------- CREATE NEW POST (START) ---------
const create_new_post = () => {
    window.location.href = base_url + "/create-post"
}
// ---------- CREATE NEW POST (END) ----------

// -------- GO TO HOME (START) --------
const go_to_home = () => {
    window.location.href = base_url + "/"
}
// --------- GO TO HOME (END) ---------

// -------- ON STARTUP (START) --------
const init = () => {

    // Start a fetch call to backend service
    // to get all the users and display them
    console.log("In Feed.js");

    //TODO
    //Getting userID from the cookie
    var value = ";" + document.cookie;
    var parts = value.split(";userID=");
    var userID;

    console.log("cookie " + parts);

    if (parts.length == 2) {
        userID = parts.pop().split(";").shift();
        console.log("userID is: " + userID);

        //Get user name for the logged in user
        fetch(base_url + "/api/user/" + userID)
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    // Get an array of users to loop through and then
                    // get the firstName and lastName for specific user
                    console.log("username: " + user.firstName)
                    user_name_section.innerHTML = "Welcome " + user.firstName + " " + user.lastName
                })

            })
            .catch(error => console.error('Error in fetching user name: ', error));

        //=======================================================================================


        fetch(base_url + "/api/backendfeed/user/" + userID + "/feeds")
            .then(response => response.json())

            // For each user listed...
            .then(feeds => {
                feeds.forEach(feed => {
                    // ... create a table row
                    const table_row = document.createElement('tr')
                    console.log("Feed description: " + feed.description + " Feed comment:" + feed.comment);

                    table_row.innerHTML = '<td>' + feed.description + '</td><td>' + feed.comment + '</td>'

                    user_feeds.appendChild(table_row)

                }); // Close this with a semi colon
            })

            // Exception handling for call to the Feeds API
            .catch(error => console.error('Error in fetching user Feeds: ', error));
    } else {
        window.location.href = base_url + "/login"
    }

}






// // Get all feeds
// fetch(base_url + "/api/backendfeed")
//     .then(response => response.json()).then(feeds => {
//         feeds.forEach(feed => {                            // For each user listed...
//             const table_row = document.createElement('tr') // ... create a table row
//             console.log("Feed description: " + feed.description);

//             table_row.innerHTML = '<td>' + feed.description + '</td><td>' + feed.comment + '</td>'

//             all_feeds.appendChild(table_row)

//         }); // Close this with a semi colon
//     })

//     // Exception handling for call to the Feeds API
//     .catch(error => console.error('Error in fetching user Feeds: ', error));
//     }








//=======================================================================================


// -------- ON STARTUP (END) --------



init()