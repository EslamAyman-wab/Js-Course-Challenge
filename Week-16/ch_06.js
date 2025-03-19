let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function showDetails(chosen) {
  // Ensure chosen is within the valid range
  if (chosen < 1 || chosen > myFriends.length) {
    console.log("Invalid choice");
    return;
  }

  // Destructure the chosen friend's data
  const { title, age, available, skills } = myFriends[chosen - 1];

  // Log the details
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(skills[1]);
}

showDetails(chosen);

// If chosen === 1
// Output:
// Osama
// 39
// Available
// CSS

// If chosen === 2
// Output:
// Ahmed
// 25
// Not Available
// Django

// If chosen === 3
// Output:
// Sayed
// 33
// Available
// Laravel
