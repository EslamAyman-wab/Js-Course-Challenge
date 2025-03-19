/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// Split the string into an array of characters
let solution = myString
  .split(",")
  // Filter out any elements that are numbers
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  // Replace underscores with spaces
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  // Combine all elements into a single string
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  })
  // Remove the first character and the last character
  .slice(true, -!false)
  // Split the string by underscores (although there should be none left)
  .split("_")
  // Join the array back into a single string
  .join("");

console.log(solution); // Output: "Elzero Web School"
