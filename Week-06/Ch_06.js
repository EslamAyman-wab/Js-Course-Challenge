// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here

// console.log(allArrs); // fxy


// The Answer 

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

allArrs = [...arr1, ...arr2].sort().slice(-3).map(c => c.toLowerCase()).join('');
console.log(allArrs); // fxy