// Creating and using objects in JavaScript

// Object representing a student
let student = {
    name: "Bhagya",
    age: 21,
    course: "CSE"
};

// Accessing object properties
console.log("Name:", student.name);   // Bhagya
console.log("Age:", student["age"]);  // 21

// Modifying object properties
student.age = 22;
console.log("Updated Age:", student.age);

// Adding new property
student.university = "Bapuji Institute";
console.log("Student Object:", student);

// Deleting a property
delete student.course;
console.log("After deletion:", student);
