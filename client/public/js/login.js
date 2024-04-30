/* ORDER OF EVENTS:
 * 1. Prompt user for login options on localhost:1337/login
 *       1a. Fetch users from backend api "user"
 *       1b. From the users list, we grab one user at a time
 *       to display on the table (all_users_table), one row
 *       at a time.
 * 3. "Go to Feed" button takes user to localhost:1337/login/username
 * 4. Posts will render out
 */

// -- CUSTOM VARIABLES ---------------

/* NOTE:
 * - The "getElementById" accesses elements that
 * we assigned a custom ID to earlier in login.html. */
const all_users_table = document.getElementById("all_users_table")      // Table that displays all users
const base_url = "http://localhost:1337"                                // Get URL
const gt_feed_button = document.getElementById("gtf_button")            // "Go to Feed" Button
// -----------------------------------

// -----------------------------------
// This will open the feed posts
function open_feed_posts(userID) {
    console.log("user clicked with user ID " + userID)
}
// -----------------------------------

// -------- ON STARTUP (START) --------
const init = () => {

    // Start a fetch call to backend service
    // to get all the users and display them
    fetch(base_url + "/api/user")  // Get all users
        .then(response => response.json())

        // For each user listed...
        .then(users => {
            users.forEach(user => {

                // ... create a table row
                const table_row = document.createElement('tr')

                // Display first name, last name, and user ID of user
                table_row.textContent = user.firstName + ' ' + user.lastName + ' ' + user.userID

                table_row.innerHTML = '<td><button onclick = open_feed_posts(' + user.userID + ') >' + user.firstName + ' ' + user.lastName + '</button></td><td>' + user.userID + '</td>'

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


// -------- WELCOME BACK MESSAGE (START) --------
const create_wb_message = () => {


    /* NOTE:
    * - We don't use a standard apostrophe ('), we use a back tick (`) because
    * it is a string template literal, which format strings differently.
    * 
    * - Here's how to make text that will have a hyperlink:
    * 
    *      wb_header.textContent = `Welcome Back, ${username_value}`
    *      wb_link.textContent = `Go to Feed`
    *      wb_link.setAttribute("href", `/feed/${username_value}`)
    *                             ^ Attaching the href to be used as a link
    */

    const username_value = username_input.value // Get Username
    const wb_header = document.createElement("h3") // Create a new element with h3 format

    /* NOTE:
     * - Once user submits the login information,
     * display the "Go to Feed" button. */
    login_form.style.display = "none" // Disable Login form
    wb_header.textContent = `Welcome Back, ${username_value}!` // Enable Welcome Back message

    // -------- GO TO FEED BUTTON (START) --------
    gt_feed_button.style.display = "block"
    gt_feed_button.textContent = `Go to Feed`

    // When the button is clicked
    gt_feed_button.onclick = (event) => {
        // Link to user's feed page
        location.href = `/feed/${username_value}`
    }
    // -------- GO TO FEED BUTTON (END) --------
    
    // Attach "wb_header" to "welcome_back"
    welcome_back.appendChild(wb_header) // node we're attaching is wb_header

}
// -------- WELCOME BACK MESSAGE (END) --------


// -------- STARTUP FUNCTIONS (START) --------
init()
// -------- STARTUP FUNCTIONS (END) --------