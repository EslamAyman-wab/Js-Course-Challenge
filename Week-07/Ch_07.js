// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// // Output
// 2
// 3
// 4

// The Answer

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "number" && i !== start) { // Skip the first number (index 0)
    console.log(mix[i]); // Print numbers starting from index 1
  }
}
// Removed unnecessary line
