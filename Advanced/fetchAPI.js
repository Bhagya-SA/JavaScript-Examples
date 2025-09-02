// Fetching data from an API

// Using a free API for example: JSONPlaceholder
const apiURL = "https://jsonplaceholder.typicode.com/users";

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log("Users from API:");
        data.forEach(user => {
            console.log(user.id, "-", user.name, "-", user.email);
        });
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });
