/*
The following handles the content and events for dashboard.html.
the application itself is built to mimic tumblr in a way.
*/

//const post = document.getElementById("posts-container")
// const author = document.createElement("p")
// const dop = document.createElement("p")
// const table = document.createElement("table");


const post_data = [
    { name: "Peter Parker", dop: "13 December 2023" },
    { name: "Tony Stark", dop: "5 March 2024" },
    { name: "Steve Rogers", dop: "3 January 2024" }
];


function createTable(data) {
    const table = document.createElement('table');

    // Create rows
    data.forEach(item => {
        const row = table.insertRow();
        Object.values(item).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    return table;
}

// Function to display the table on the page
function display_post() {
    const table_container = document.getElementById("posts-container");
    const table = createTable(post_data);
    table_container.appendChild(table);
}


display_post();