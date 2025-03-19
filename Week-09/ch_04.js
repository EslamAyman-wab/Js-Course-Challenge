function specialMix(...data) {
  // Check if all items in the input are strings
  const allStrings = data.every((item) => typeof item === "string");

  // If all items are strings, check if any of them contains a number
  if (allStrings) {
    let contNumber = data.some((item) => /\d/.test(item));
    // If no strings contain numbers, return "All Are Strings"
    if (!contNumber) {
      return "All Are Strings"; // Return this message if all are strings
    }
  }

  // If not all items are strings or some strings contain numbers,
  // calculate the sum of numbers in the strings or add numbers directly
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    // If the current item is a string, extract numbers from it
    if (typeof data[i] === "string") {
      const numStr = data[i].match(/\d+(\.\d+)?/); // Extract numbers using regex
      if (numStr) {
        const num = parseFloat(numStr[0]); // Convert the extracted number to a float
        sum += num; // Add the number to the sum
      }
    } else if (typeof data[i] === "number") {
      // If the current item is a number, add it directly to the sum
      sum += data[i];
    }
  }
  // Return the calculated sum
  return sum;
}

// Test cases
console.log(specialMix(10, 20, 30)); // 60 (all numbers are added directly)
console.log(specialMix("10Test", "Testing", "20Cool")); // 30 (numbers extracted from strings and added)
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50 (numbers extracted from strings and added)
console.log(specialMix("Test", "Cool", "Test")); // All Are Strings (no numbers in any string)
