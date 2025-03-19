let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

let map = new Map(Object.entries(myInfo));

console.log(map);
console.log(map.size);
console.log(map.has("role"));
