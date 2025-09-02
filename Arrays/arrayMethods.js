// Common Array Methods in JavaScript

let numbers = [10, 20, 30, 40, 50];

console.log("Original numbers:", numbers);

// push() - add at the end
numbers.push(60);
console.log("After push:", numbers);

// pop() - remove from the end
numbers.pop();
console.log("After pop:", numbers);

// shift() - remove from the start
numbers.shift();
console.log("After shift:", numbers);

// unshift() - add at the start
numbers.unshift(5);
console.log("After unshift:", numbers);

// forEach() - iterate over array
console.log("Using forEach:");
numbers.forEach(num => console.log(num));

// map() - create a new array by modifying elements
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// filter() - get elements based on condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
