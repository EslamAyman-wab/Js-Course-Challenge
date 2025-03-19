let nums = [2, 12, 11, 5, 10, 1, 99];

let number = nums.reduce(function (acc, current) {
  if (current % 2 !== 0) {
    // If current is odd, add it to acc
    return acc + current;
  } else {
    // If current is even, multiply acc by current
    return acc * current;
  }
}, 1); // Start with an initial value of 1 for the accumulator

console.log(number); // Output: 500
