// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// the answer

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Single Line Solution (Merge + Sort + Reverse for Z->A order):
finalArr = [...arrOne, ...arrTwo].sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
