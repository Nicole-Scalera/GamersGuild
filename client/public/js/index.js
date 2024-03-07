/* ORDER OF EVENTS:
 * 1. Prompt user for login on localhost:1337/login
 * 2. Login form disappears & "Go to Feed" button appears
 * 3. "Go to Feed" button takes user to localhost:1337/login/username
 * 4. Posts will render out
 */

// -- CUSTOM VARIABLES ---------------

/* NOTE:
 * - The "getElementById" accesses elements that
 * we assigned a custom ID to earlier in login.html. */
const login_form = document.getElementById("website_login_form")        // Login Form
const username_input = document.getElementById("login_username_input")  // Username Prompt Box
const email_input = document.getElementById("login_email_input")        // Email Prompt Box
const password_input = document.getElementById("login_password_input")  // Password Prompt Box
const welcome_back = document.getElementById("welcome_back_message")    // Welcome back message
const gt_feed_button = document.getElementById("button")
const header_logo = document.getElementById("gg_header_logo")

// -----------------------------------

// Function for button
const init = () => {
    // Make sure the button isn't
    // displayed when the page first loads.
    button.style.display = "none"
    login_form.style.display = "block"

}

// If the header logo is clicked, the user
// will be taken to the homepage. 
const header_logo_homepage = () => {

    const header_logo_link = document.createElement("a")

    // When the button is clicked
    header_logo.onclick = (event) => {
        // Link to user's homepage
        location.href = `/index.html`
    }
    
    header_logo.appendChild(header_logo_link) // node we're attaching is header_logo_link

}

const create_wb_message = () => {

    /* NOTE:
    * - We don't use a standard apostrophe ('), we use a back tick (`)
    * because it is a string template literal, which format strings
    * differently.
    * 
    * - Here's how to make text that will have a hyperlink:
    * 
    *      wb_header.textContent = `Welcome Back, ${username_value}`
    *      wb_link.textContent = `Go to Feed`
    *      wb_link.setAttribute("href", `/feed/${username_value}`)
    *                             ^ Attaching the href to be used as a link
    */

    const username_value = username_input.value
    const wb_header = document.createElement("h3") // Create a new element with the h3 header format
    const wb_link = document.createElement("a")

    /* NOTE:
     * - Once user submits the login information,
     * display the "Go to Feed" button. */
    login_form.style.display = "none"
    button.style.display = "block"
    button.textContent = `Go to Feed`

    // When the button is clicked
    button.onclick = (event) => {
    
        // Link to user's feed page
        location.href = `/feed/${username_value}`

    }
    
    // These need to be in order
    welcome_back.appendChild(wb_header) // node we're attaching is wb_header
    welcome_back.appendChild(wb_link) // node we're attaching is wb_link

}


/* NOTE:
 * -"login_form.onsubmit" is the same as addEventListener,
 * this is just more modern. This is a particular event,
 * but there's more events that can happen.
 * - Blocks of code are triggered in the event of something.
 * - It won't run unless we call the event.
 * - DO NOT make more than one "onsubmit," otherwise the
 * following one will override the previous.
 * - "preventDefault()" is a function built into "event" */

login_form.onsubmit = (event) => {

    // Prevent the default behavior
    event.preventDefault()

    // For the Console
    console.log("This form has been submitted.") // Confirm form submission (optional)

    // Get the value for each of these
    const username_value = username_input.value
    const email_value = email_input.value
    const password_value = password_input.value

    // For the Console
    console.log("Username:", username_value)    // Print out username
    console.log("Email:", email_value)          // Print out email
    console.log("Password:", password_value)    // Print out password

    // Call the function to create
    // the "Welcome Back" message.
    create_wb_message()
    login_form.style.display = "none"
    button.style.display = "block" // Make the button visible

}

// Call these functions on startup
init()
header_logo_homepage()