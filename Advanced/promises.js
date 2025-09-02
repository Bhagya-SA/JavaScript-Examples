// Using Promises in JavaScript

const task = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection

    setTimeout(() => {
        if(success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    }, 2000);
});

task.then((message) => {
    console.log("Success:", message);
}).catch((error) => {
    console.log("Error:", error);
});
