// 1. Define a string containing various test patterns
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output should be: ['Os10O', 'OsO', 'Os100O']

// 2. Create a function to find and log matching patterns
function result() {
  // 3. Set up regex to match words that:
  //    - Start with "Os" (\bOs)
  //    - Have optional digits in the middle (\d*)
  //    - End with "O" (O\b)
  answer = /\bOs\d*O\b/g;

  // 4. Find all matches in the string and print them
  console.log(specialNames.match(answer));
}

// 5. Call the function to execute the search
result();
