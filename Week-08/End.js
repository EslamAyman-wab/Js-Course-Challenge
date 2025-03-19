/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/



// Function to display details based on the input parameters
function showDetails(a, b, c) {
    // Commit 1: Determine the 'name' from the parameters
    // Checks if 'a' is a string, if not, checks 'b', and finally 'c'
    let name = typeof a === "string" ? a : typeof b === "string" ? b : c;

    // Commit 2: Determine the 'age' from the parameters
    // Checks if 'a' is a number, if not, checks 'b', and finally 'c'
    let age = typeof a === "number" ? a : typeof b === "number" ? b : c;

    // Commit 3: Determine the 'isAvailable' status from the parameters
    // Checks if 'a' is a boolean, if not, checks 'b', and finally 'c'
    let isAvailable = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

    // Commit 4: Log the details to the console
    // Uses template literals to dynamically insert the values of name, age, and isAvailable
    console.log(
        `Hello ${name}, Your Age Is ${age}, You Are ${
            isAvailable ? "Available" : "Not Available"
        } For Hire`
    );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"