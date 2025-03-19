// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// The Answer

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"]; // Array of names
let letter = "a"; // Letter to filter out (case insensitive)
let count = [].length; // Dynamically set count to 0 using an empty array's length

for (let i = friends.length; i--; ) {
  // Start from last index, loop backwards
  if (!friends.at(i).toLowerCase().startsWith(letter)) {
    // Check if name does NOT start with the letter
    console.log(`${++count} => ${friends.at(i)}`); // Increment count first, then print it with the name
  }
}
