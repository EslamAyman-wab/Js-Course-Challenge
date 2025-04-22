// Write Your Code Here

// This line adds a new function called "addLove" to all strings in JavaScript
// String.prototype means we're adding this function to ALL strings
String.prototype.addLove = function () {
  // "this" refers to the string value we're using the function on
  // We return a new string that combines "I Love", the original string, and "Web School"
  return `I Love ${this} Web School`;
};

// Do Not Edit Below

// Here we create a normal string variable
let myStr = "Elzero";

// Now we can use our new addLove function on our string
// Even though we didn't define this function for myStr specifically,
// it works because we added it to String.prototype, which affects all strings
console.log(myStr.addLove()); // I Love Elzero Web School
