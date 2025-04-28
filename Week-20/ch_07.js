// This is a generator function that yields numbers 1, 2, 2, 2, 3, 4, 5
// Generator functions use * after 'function' keyword and can pause/resume with 'yield'
function* genNumbers() {
  // yield* delegates to another iterable (in this case an array)
  // This means it will yield each value from the array one at a time
  yield* [1, 2, 2, 2, 3, 4, 5];
}

// This is another generator function that yields letters A, B, B, B, C, D
function* genLetters() {
  // Similar to above, but with letters instead of numbers
  yield* ["A", "B", "B", "B", "C", "D"];
}

// This generator function combines results from both generators above
// while removing consecutive duplicates
function* genAll() {
  // Step 1: Process genNumbers without duplicates
  let previous; // Variable to track the last yielded value

  // Loop through each value produced by genNumbers()
  for (const value of genNumbers()) {
    // Only yield values that are different from the previous one
    if (value !== previous) {
      // 'yield' pauses the function and returns the value
      yield value;
      // Update our tracking variable to the current value
      previous = value;
    }
  }

  // Step 2: Reset 'previous' to handle genLetters independently
  // This ensures we don't compare the last number with the first letter
  previous = undefined;

  // Step 3: Process genLetters without duplicates (same logic as above)
  for (const value of genLetters()) {
    if (value !== previous) {
      yield value;
      previous = value;
    }
  }
}

// Create an instance of our generator
let generator = genAll();

// Call .next() repeatedly to get each value from the generator
// Each call returns an object with {value: [the yielded value], done: [boolean]}
// 'done' becomes true when the generator is finished
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
