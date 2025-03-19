let myString = "EElllzzzzzzzeroo";

// Step 1: Split the string into an array of individual characters
// Example: "EElllzzzzzzzeroo" => ["E", "E", "l", "l", "l", "z", "z", "z", "z", "z", "z", "z", "e", "r", "o", "o"]
let characters = myString.split("");

// Step 2: Use the reduce() method to build the final string
// reduce() iterates over each character in the array and accumulates a result
let result = characters.reduce((acc, char) => {
  // Step 3: Check if the current character (char) is already in the accumulator (acc)
  // acc.includes(char) returns true if the character is already in the accumulator
  if (!acc.includes(char)) {
    // Step 4: If the character is NOT already in the accumulator, add it to the accumulator
    acc += char;
  }
  // Step 5: Return the updated accumulator for the next iteration
  return acc;
}, ""); // Step 6: Start with an empty string as the initial value of the accumulator

// Step 7: Log the final result to the console
console.log(result); // Output: "Elzero"
