// Step 1: Define the input array
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Step 2: Flatten the array using reduce()
// The reduce() method iterates over each element in the array and accumulates a result
let flattenedArray = myArray.reduce(function (acc, current) {
  // Step 3: Check if the current element is an array
  if (Array.isArray(current)) {
    // If it's an array, concatenate its elements to the accumulator
    return acc.concat(current);
  } else {
    // If it's not an array, add the element itself to the accumulator
    return acc.concat(current);
  }
}, []); // Step 4: Start with an empty array as the initial value of the accumulator

// Step 5: Combine the flattened array into a single string using reduce()
// The second reduce() iterates over the flattened array and builds a string
let resultString = flattenedArray.reduce(function (acc, current) {
  // Step 6: Append the current element to the accumulator
  return `${acc}${current}`;
}, ""); // Step 7: Start with an empty string as the initial value of the accumulator

// Step 8: Log the final result
console.log(resultString); // Output: "Elzero"
