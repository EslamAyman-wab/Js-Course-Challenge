// Creates a new date object with the current date and time
let date = new Date();

// Sets the day of the month to 0
// This is a special case - using 0 actually gives us the LAST DAY of the PREVIOUS month
// (JavaScript dates work in a way that day 0 = last day of previous month)
date.setDate(0);

// Prints the full date as a string to the console
// This will show the last day of the previous month with day, date, time, etc.
console.log(date.toString());

// Creates a more user-friendly formatted message that:
console.log(
  `Previous Month Is ${date.toLocaleString("default", {
    // Gets the month name (like "January", "February", etc.) from the date object
    month: "long",
  })} And Last Day Is ${date.getDate()}`
  // getDate() returns the day of the month (1-31) from our date object
  // Since we set the date to day 0, this will show the last day number of the previous month
);
