let theName = "Elzero";

// Converting string to array in 5 different ways

// Method 1: Using spread operator with Set (removes duplicates if any)
let result1 = [...new Set(theName)];
console.log("the result1 =", result1);
console.log("#".repeat(20));

// Method 2: Using string split method
let result2 = theName.split("");
console.log("the result2 =", result2);

console.log("#".repeat(20));

// Method 3: Using Array.from method
let result3 = Array.from(theName);
console.log("the result3 =", result3);

console.log("#".repeat(20));

// Method 4: Using spread operator directly
let result4 = [...theName];
console.log("the result4 =", result4);

console.log("#".repeat(20));

// Method 5: Using traditional for loop with push
let result5 = [];
for (let i = 0; i < theName.length; i++) {
  result5.push(theName[i]);
}
console.log("the result5 =", result5);
