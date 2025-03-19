function checkStatus(a, b, c) {
  let name, age, isAvailable;

  // Determine the order of parameters based on their types
  if (typeof a === "string") {
    name = a;
    age = b;
    isAvailable = c;
  } else if (typeof b === "string") {
    name = b;
    age = a;
    isAvailable = c;
  } else if (typeof c === "string") {
    name = c;
    age = b;
    isAvailable = a;
  }

  // Output the result
  if (isAvailable) {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
