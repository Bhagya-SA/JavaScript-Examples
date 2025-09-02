// Using async/await in JavaScript

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Bhagya", course: "CSE" };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    try {
        const result = await fetchData();
        console.log("Data received:", result);
    } catch(error) {
        console.log("Error:", error);
    }
}

getData();
