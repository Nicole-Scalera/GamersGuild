//TODO
const user_feeds = document.getElementById("user_feeds")
const user_name_section = document.getElementById("Logged_in_user")

const base_url = "http://localhost:1337"

const create_new_post = () => {
    window.location.href = base_url + "/create-post"
}

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
            .then(user => {
                console.log("user name: " + user.firstName)
                user_name_section.innerHTML = "Welcome " + user.firstName + " " + user.lastName
            })
            .catch(error => console.error('Error in fetching user name: ', error));

        fetch(base_url + "/api/backendfeed/user/" + userID + "/feeds")
            .then(response => response.json())

            // For each user listed...
            .then(feeds => {
                feeds.forEach(feed => {
                    // ... create a table row
                    const table_row = document.createElement('tr')
                    console.log("Feed description: " + feed.description);

                    table_row.innerHTML = '<td>' + feed.description + '</td><td>' + feed.comment + '</td>'

                    user_feeds.appendChild(table_row)

                }); // Close this with a semi colon
            })

            // Exception handling for call to the Feeds API
            .catch(error => console.error('Error in fetching user Feeds: ', error));
    }

}
// -------- ON STARTUP (END) --------



init()