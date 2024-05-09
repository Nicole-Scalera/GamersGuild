// -- CUSTOM VARIABLES ---------------
const header_logo = document.getElementById("gg_header_logo")       // Logo in Header
const navbar = document.getElementById("navigationalbar")           // Navigational Bar
const navbar_home = document.getElementById("navbar_home")          // Navigational Bar - Home
const navbar_create = document.getElementById("navbar_create")      // Navigational Bar - Create
const navbar_profile = document.getElementById("navbar_profile")    // Navigational Bar - Profile

// -----------------------------------


// -------- HEADER LOGO (START) --------
const header_logo_homepage = () => {

    // If the header logo is clicked, the user
    // will be taken to the homepage (index.html).

    const header_logo_link = document.createElement("a")

    // When the logo is clicked
    header_logo.onclick = (event) => {
        // Link to user's homepage
        location.href = `/index.html`
    }

    header_logo.appendChild(header_logo_link) // node we're attaching is header_logo_link

}
// -------- HEADER LOGO (END) --------

// ------ HEADER ITEMS (START) -------
const navbar_items = () => {

    // When the home tab is clicked
    navbar_home.onclick = (event) => {
        // Link to index page
        location.href = `/index.html`
    }


    // When the create tab is clicked
    navbar_create.onclick = (event) => {
        // Link to explore page
        location.href = `/create-post`
    }


    // When the profile tab is clicked
    navbar_profile.onclick = (event) => {
        // Link to explore page
        location.href = `/feed`
    }


    header_logo.appendChild(header_logo_link) // node we're attaching is header_logo_link

}
// ------- HEADER ITEMS (END) --------

// -------- STARTUP FUNCTIONS (START) --------
header_logo_homepage()
navbar_items()
// -------- STARTUP FUNCTIONS (END) --------