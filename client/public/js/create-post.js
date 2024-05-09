const base_url = "http://localhost:1337"                             // Get URL
const post_caption = document.getElementById("post_caption_id")      // Caption for post
const share_button = document.getElementById("share_button_id")      // Share button

const init = () => {
    var value = ";" + document.cookie;
    var parts = value.split(";userID=");

    // Identify the userID
    var userID;

    if (parts.length != 2) {
        window.location.href = base_url + "/login"
    }

}

const submit_post = () => {
    // Get the contents of the caption
    // inputted by the user.
    var caption_contents = post_caption.value;
    var value = ";" + document.cookie;
    var parts = value.split(";userID=");

    var userID;


    if (parts.length == 2) {

        userID = parts.pop().split(";").shift();

        // Define the data we want to send
        const data = {
            userID: userID, // Get the userID
            description: caption_contents // Get the contents of the caption
        };

        // Send the POST request using fetch
        fetch(base_url + "/api/backendfeed/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => console.log("Success:", data))
            .catch((error) => console.error("Error:", error));

        // Link to user's feed page
        window.location.href = base_url + "/feed"

    } else {
        window.location.href = base_url + "/login"
    }

}

init()
