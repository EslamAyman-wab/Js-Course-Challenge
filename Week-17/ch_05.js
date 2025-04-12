let theName = "Elzero";

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

let result1 = [...new Set(theName)];
console.log(result1);
console.log("#".repeat(20));

let result2 = theName.split("");
console.log(result2);

console.log("#".repeat(20));
let result3 = Array.from(theName);
console.log(result3);

console.log("#".repeat(20));
