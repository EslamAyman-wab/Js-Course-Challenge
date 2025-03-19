// This array contains a mix of numbers and string characters
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// This section transforms the array using map and reduce methods
let mixer = mix
  // The map method goes through each element in the array
  .map(function (ele) {
    // For each element, we check if it's a number using isNaN(parseInt(ele))
    // If it's NOT a number (isNaN returns true), we keep the element
    // If it IS a number, we replace it with an empty string ""
    return isNaN(parseInt(ele)) ? ele : "";
  })
  // The reduce method combines all elements into a single string
  .reduce(function (acc, current) {
    // acc is the accumulated result so far
    // current is the current element being processed
    // This line combines the accumulated result with the current element
    return `${acc}${current}`;
  });

// Finally, we print the result to the console
console.log(mixer); // This will output "Elzero"
