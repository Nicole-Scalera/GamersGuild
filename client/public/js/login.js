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
    var now = new Date();
    var expire_time = 600000; // Expiration time of 10 minutes
    now.setTime(now.getTime() + expire_time);
    document.cookie = "userID=" + userID + "; expires="
        + now.toUTCString() + ";";
    window.location = "/feed" // Redirect to feed page
}
// -----------------------------------

// -------- ON STARTUP (START) --------
const init = () => {

    // Start a fetch call to backend service
    // to get all the users and display them
    fetch(base_url + "/api/user")  // Get all users
        .then(response => response.json())

        .then(users => {

            // Create a row prompting user for login
            const table_row_prompt = document.createElement('tr')

            // Content of row
            //table_row_prompt.textContent = 'Login'

            // Formatting of row
            table_row_prompt.innerHTML = '<td class="text1">Login</td>'

            // Add to all_users_table
            all_users_table.appendChild(table_row_prompt)

            // For each user listed, create a table row.
            users.forEach(user => {
                const table_row_users = document.createElement('tr')

                // Display first name, last name, and user ID of user
                table_row_users.textContent = user.firstName + ' ' + user.lastName + ' ' + user.userID

                table_row_users.innerHTML = '<td><button onclick = open_feed_posts(' + user.userID + ') class="button_nav1">' + user.firstName + ' ' + user.lastName + '</button></td>'

                // Add to all_users_table
                all_users_table.appendChild(table_row_users)

                console.log(user.firstName); // For debugging

            }); // Close this with a semi colon
        })
        
        // Exception handling for call to the users API
        .catch(error => console.error('Error in fetching users: ', error));
7
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