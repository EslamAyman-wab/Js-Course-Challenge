let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];

chars1.copyWithin(-5, 0, 5);
console.log(chars1);

console.log("#".repeat(20));

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let result1 = chars2.copyWithin(3, 4);
result1.copyWithin(4, 0);

console.log(result1);

console.log("#".repeat(20));

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let result2 = chars3.copyWithin(4, 2, 5);
result2.copyWithin(2, 0, 2);
console.log(chars3);
