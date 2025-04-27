// Starts a timer and stores the current timestamp in milliseconds
// performance.now() gives a very precise time measurement for code performance testing
const start = performance.now();

// Creates a loop that will run 99,999 times (from 1 to 99,999)
for (let i = 1; i <= 99999; i++) {
  // For each number from 1 to 99,999, print that number to the console
  // This will create a lot of console output!
  console.log(i);
}

// Stops the timer by getting the current timestamp after the loop has finished
const end = performance.now();

// Calculates how long the loop took by finding the difference between end and start times
// Then prints the result in milliseconds to the console
// The `` (backticks) allow us to include variables inside a string using ${variable}
console.log(`Loop Took ${end - start} Milliseconds.`);
