// Select elements
const heading = document.getElementById("heading");
const changeTextBtn = document.getElementById("changeTextBtn");
const addColorBtn = document.getElementById("addColorBtn");
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetOutput = document.getElementById("greetOutput");

// Change text on button click
changeTextBtn.addEventListener("click", () => {
    heading.innerText = "Text Changed Successfully!";
});

// Add color to heading
addColorBtn.addEventListener("click", () => {
    heading.style.color = "blue";
});

// Greet user with input value
greetBtn.addEventListener("click", () => {
    const name = nameInput.value;
    if(name) {
        greetOutput.innerText = `Hello, ${name}! Welcome to JavaScript.`;
    } else {
        greetOutput.innerText = "Please enter your name.";
    }
});
