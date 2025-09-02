// Methods and 'this' keyword in objects

let student = {
    name: "Bhagya",
    age: 21,
    course: "CSE",
    
    // Method to greet
    greet: function() {
        return `Hello, I am ${this.name} and I study ${this.course}.`;
    },
    
    // Method to check if adult
    isAdult: function() {
        return this.age >= 18;
    }
};

console.log(student.greet());       // Hello, I am Bhagya and I study CSE.
console.log("Is Adult?", student.isAdult()); // true

// Object.keys() - get all keys
console.log("Keys:", Object.keys(student));

// Object.values() - get all values
console.log("Values:", Object.values(student));

// Object.entries() - get key-value pairs
console.log("Entries:", Object.entries(student));
