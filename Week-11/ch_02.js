// Method One
let objMethodOne = {
  property: "Method one",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object({
  property: "Method two",
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Tree";
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, objMethodOne);

objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"
