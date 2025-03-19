// Step 1: Define the input array
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// Step 2: Use the filter() method to remove strings
let filteredNumbers = numsAndStrings.filter(function (ele) {
  // Step 3: Check if the current element is NOT a string
  return typeof ele !== "string"; // Keep elements that are NOT strings
});

// Step 4: Use the map() method to negate each number
let negatedNumbers = filteredNumbers.map(function (ele) {
  // Step 5: Negate the current element (multiply by -1)
  return -ele;
});

// Step 6: Log the final result
console.log(negatedNumbers); // Output: [-1, -10, 10, 20, -5, -3]
