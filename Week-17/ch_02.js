let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

let myUniqueFriends = new Set(myFriends.sort());

console.log(myUniqueFriends);
console.log(myUniqueFriends.size);
