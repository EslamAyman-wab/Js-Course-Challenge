// Step 1: Create a new Set called setOfNumbers and add 10 during creation
let setOfNumbers = new Set([10]);

// Step 2: Add 20 to the Set in a separate line
// Step 3: In the same line, add the size of the Set before adding the new element
setOfNumbers.add(20).add(setOfNumbers.size);

// Step 4: Print the Set to the console
console.log(setOfNumbers); // Output: Set(3) { 10, 20, 2 }

// Step 5: In a single line, print the last element in the Set
console.log([...setOfNumbers].pop()); // Output: 2
