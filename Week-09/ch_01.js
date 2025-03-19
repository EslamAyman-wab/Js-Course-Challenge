function getDetails(zName, zAge, zCountry) {
  // Commit 1: Function to format the name (e.g., "Osama Mohamed" => "Osama M.")
  function namePattern(zName) {
    let [firstName, lastName] = zName.split(" "); // Split the name into first and last name
    return `${firstName} ${lastName?.charAt(0).toUpperCase() + "." || ""}`; // Format the last name to show only the first letter
  }

  // Commit 2: Function to extract the age from the message (e.g., "38 Is My Age" => "38")
  function ageWithMessage(zAge) {
    let age = zAge.split(" ")[0]; // Extract the first part of the string (the age)
    return `Your Age Is ${age}`; // Return the formatted age message
  }

  // Commit 3: Function to format the country code (e.g., "Egypt" => "EG")
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`; // Take the first two letters and convert to uppercase
  }

  // Commit 4: Function to combine all details into a single formatted string
  function fullDetails() {
    let name = namePattern(zName); // Format the name
    let age = ageWithMessage(zAge); // Format the age
    let country = countryTwoLetters(zCountry); // Format the country
    return `Hello ${name}, ${age}, ${country}`; // Combine all details into a single string
  }

  return fullDetails(); // Return the final formatted details
}

// Test cases
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Output: Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Output: Hello Ahmed A., Your Age Is 32, You Live In SY
