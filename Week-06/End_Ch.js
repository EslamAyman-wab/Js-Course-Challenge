// /*
//   Array Challenge
// */

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice("????")); // ["Elham", "Mazero"]

// console.log(); // "Elzero"

// console.log(); // "rO"

// The Answer

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,counter).concat(my[counter]).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]

console.log(my[2].slice(0, 2) + my[1].slice(2)); // "Elzero"

console.log(my[1][4] + zero); // "rO"
