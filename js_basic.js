// ==========================================
// 🚀 JAVASCRIPT COMPLETE PRACTICE SHEET
// ==========================================

// 1. VARIABLE DECLARATION (Rules similar to C/C++)
let myname = "devid"; // 'let' allows value reassignment but not re-declaration in the same scope
myname = "nandni";    // OK: Reassigning value
console.log(myname);

const mycity = "Tharad"; // 'const' is immutable (Value cannot be changed)
// mycity = "deesa";     // Error: Assignment to constant variable
console.log(mycity);

// ------------------------------------------
// 2. DATA TYPES
// ------------------------------------------

// String (The modern way using Template Literals/Backticks)
let myname1 = 'devid';
let usrname = "parmar";
let city = `tharad`;
console.log(`My name is ${myname1}`); // Using ${} to inject variables

// Number (In JS, both integers and floats are of type 'Number')
let no_int = 25;
let no_flot = 23.34;

// Boolean (True/False values)
let isPass = true;

// Undefined (Variable is declared but no value is assigned)
let testName;
console.log(testName); // Output: undefined

// Null (Explicitly setting a variable to be empty)
let myData = null;

// ------------------------------------------
// 3. OBJECTS & ARRAYS (Similar to Python Dictionaries and Lists)
// ------------------------------------------

// Object (Key-Value pairs)
let myProfile = {
    "name" : "devid",
    "city" : "tharad",
    "college" : "BCA college Palanpur"
};

// Array (Zero-indexed collection)
let friends = ["devid", "akash", "nandni", "sachin"];
console.log(friends[0]); // Accessing the first element: devid

// ------------------------------------------
// 4. OPERATORS
// ------------------------------------------

let x = 10, y = 20;
console.log(`Sum: ${x + y}`);
console.log(`Power: ${x ** 2}`); // Exponentiation (10 squared)

// Comparison (Loose vs Strict Equality)
console.log(5 == '5');  // true  (Checks only value, performs type coercion)
console.log(5 === '5'); // false (Checks both Value and Data Type - Recommended)

// Logical Operators (AND: &&, OR: ||, NOT: !)
if (x < y && y > 15) {
    console.log("Logical AND: Both conditions are true");
}

// ------------------------------------------
// 5. CONTROL FLOW (Conditionals & Switch)
// ------------------------------------------

let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Switch Case (Structure similar to C language)
let day = 2;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Other Day");
}

// ------------------------------------------
// 6. LOOPS
// ------------------------------------------

console.log("For Loop 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ------------------------------------------
// 7. ARRAY MASTER METHODS
// ------------------------------------------
let tech = ["HTML", "CSS", "JS"];

tech.push("Python");   // Adds to the end
tech.pop();            // Removes from the end
tech.unshift("PHP");   // Adds to the beginning
tech.shift();          // Removes from the beginning

// Splice (Adding/Removing from specific index)
// Logic: At index 1, remove 1 item and insert "React"
tech.splice(1, 1, "React"); 

// Map (Transforming every element in the array)
let numbers = [10, 20, 30];
let double = numbers.map(num => num * 2); 
console.log(double); // Output: [20, 40, 60]

// Filter (Extracting data based on a condition)
let bigNumbers = numbers.filter(num => num > 15);
console.log(bigNumbers); // Output: [20, 30]

// ------------------------------------------
// 8. FUNCTIONS (Reusable code blocks)
// ------------------------------------------

// Standard Function declaration
function sayHello(user) {
    return `Hello ${user}`;
}
console.log(sayHello("Devid"));

// Arrow Function (Concise modern syntax)
const add = (a, b) => a + b;
console.log(`Addition Result: ${add(10, 5)}`);

console.log("\n=== JAVASCRIPT PRACTICE COMPLETE === 🚀");