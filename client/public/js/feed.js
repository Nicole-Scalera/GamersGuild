const user_feeds = document.getElementById("user_feeds")
const base_url = "http://localhost:1337"

// -------- ON STARTUP (START) --------
const init = () => {

    // Start a fetch call to backend service
    // to get all the users and display them
    fetch(base_url + "/api/backendfeed/getFeedsByUserID")
        .then(response => response.json())

        // For each user listed...
        .then(feeds => {
            feeds.forEach(feed => {

                // ... create a table row
                const table_row = document.createElement('tr')

                // // Display first name, last name, and user ID of user
                // table_row.textContent = user.firstName + ' ' + user.lastName + ' ' + user.userID

                //table_row.innerHTML = '<td><button onclick = open_feed_posts(' + user.userID + ') >' + user.firstName + ' ' + user.lastName + '</button></td><td>' + user.userID + '</td>'

                console.log("Feed description: " + feed.description);

                // Create a button for the name (so it can be styled later)
                //const user_button = document.createElement('a')

                // Assign the individual ID for that button on the page
                // according to the user's individual ID
                // user_button.id = 'user_button_' + user.userID

                // user_button.className = 'button_nav1' // Assign the class name
                // user_button.style = 'margin: auto;' // Configure the style of the button

                // // Open the feed posts of that individual user
                // user_button.onclick = 'open_feed_posts(' + user.userID + ')'

                // Add table row with user to the user table
                all_users_table.appendChild(table_row)

                console.log(user.firstName); // For debugging

            }); // Close this with a semi colon
        })

        // Exception handling for call to the users API
        .catch(error => console.error('Error in fetching users: ', error));

    // Prompt User for Credentials

}
// -------- ON STARTUP (END) --------

init()