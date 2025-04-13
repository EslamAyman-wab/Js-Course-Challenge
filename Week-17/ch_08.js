let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
210;

console.log([...n1].reduce((a, b) => a + b) * n2.length);

// [...n1] creates a copy of the n1 array using the spread operator
// .reduce((a, b) => a + b) adds all elements in the array together (10+30+10+20 = 70)
// n2.length gives us the number of elements in n2 (which is 3)
// Finally, we multiply 70 * 3 to get 210
[...n1].reduce((a, b) => a + b) * n2.length;
