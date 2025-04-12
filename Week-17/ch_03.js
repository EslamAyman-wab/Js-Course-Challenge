// Define an object containing user information.
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Create a new Map from the object's entries.
// Object.entries() returns an array of [key, value] pairs.
let map = new Map(Object.entries(myInfo));

// Output the Map object.
console.log(map);

// Output the size (number of key-value pairs) of the Map.
console.log(map.size);

// Check if the Map has a key called "role" and output the result (true or false).
console.log(map.has("role"));
console.log(map.has("role"));
