// -- CUSTOM VARIABLES ---------------
const header_logo = document.getElementById("gg_header_logo")       // Logo in Header
const navbar = document.getElementById("navigationalbar")           // Navigational Bar
// -----------------------------------


// -------- HEADER LOGO (START) --------
const header_logo_homepage = () => {

    // If the header logo is clicked, the user
    // will be taken to the homepage (index.html).

    const header_logo_link = document.createElement("a")

    // When the button is clicked
    header_logo.onclick = (event) => {
        // Link to user's homepage
        location.href = `/index.html`
    }

    header_logo.appendChild(header_logo_link) // node we're attaching is header_logo_link

}
// -------- HEADER LOGO (END) --------


// -------- STARTUP FUNCTIONS (START) --------
header_logo_homepage()
// -------- STARTUP FUNCTIONS (END) --------