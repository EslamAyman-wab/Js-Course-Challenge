// Creating an object with properties for a user
const myObj = {
  username: "Elzero", // User's name
  id: 100, // User's ID number
  score: 1000, // User's score in a game
  country: "Egypt", // User's country
};

// Write Your Code Here
// Object.defineProperty lets us control how object properties behave
Object.defineProperty(myObj, "score", {
  writable: false, // This makes the score property read-only
  // Now we can't change the score value even if we try
});

Object.defineProperty(myObj, "id", {
  enumerable: false, // This hides the ID property when we loop through the object
  // The property still exists but won't show up in for...in loops
});

delete myObj.country; // This completely removes the country property from the object

// This tries to change the score value to 500
myObj.score = 500; // But this won't work because we made score read-only above!

// This loop goes through each property in the object
for (let prop in myObj) {
  // For each property, it prints the property name and its value
  // Only enumerable properties will show up here (so id won't show up)
  console.log(`${prop} => ${myObj[prop]}`);
}

// This prints the entire object to the console
console.log(myObj); // Even though the id property is not enumerable,
// it still shows up in console.log of the whole object

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
