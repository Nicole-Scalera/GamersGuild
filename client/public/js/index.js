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
const welcome_back = document.getElementById("welcome_back_text")       // Welcome back message
const gt_feed_button = document.getElementById("gtf_button")            // "Go to Feed" Button            // Insert Navigational Bar
const prompt = document.getElementById("credentials_prompt")            // Prompt User for Credentials

// -----------------------------------


// -------- ON STARTUP (START) --------
const init = () => {
    gt_feed_button.style.display = "none" // "Go to Feed" button isn't initially visible.
    prompt.style.display = "block" // Prompt user for credentials on startup.
    login_form.style.display = "block" // Login form is visible on startup.

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


/* NOTE:
 * -"login_form.onsubmit" is the same as addEventListener,
 * this is just more modern. This is a particular event,
 * but there's more events that can happen.
 * - Blocks of code are triggered in the event of something.
 * - It won't run unless we call the event.
 * - DO NOT make more than one "onsubmit," otherwise the
 * following one will override the previous.
 * - "preventDefault()" is a function built into "event" */


// -------- LOGIN FORM - SUBMIT (START) --------
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
    prompt.style.display = "block"      // Disable the credentials prompt
    gt_feed_button.style.display = "block" // Make the "Go to Feed" button visible
    login_form.style.display = "none"  // Disable the Login form

}
// -------- LOGIN FORM - SUBMIT (END) --------


// -------- STARTUP FUNCTIONS (START) --------
init()
// -------- STARTUP FUNCTIONS (END) --------