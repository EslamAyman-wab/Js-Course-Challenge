// We have three arrays with names
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Destructuring assignment to extract specific elements from the arrays
// [[c, ,], [, ,], [, a, b]] = [arr1, arr2, arr3];
// - [c, ,] extracts the first element of arr1 and assigns it to 'c'. The commas skip the other elements.
// - [, ,] skips all elements of arr2 (no variables are assigned).
// - [, a, b] skips the first element of arr3, assigns the second element to 'a', and the third element to 'b'.
[[c, ,], [, ,], [, a, b]] = [arr1, arr2, arr3];

// Output the result using template literals
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// Expected Output: My Best Friends: Shady, Mahmoud, Ahmed
