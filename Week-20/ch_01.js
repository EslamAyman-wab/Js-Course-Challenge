// Create a Date object representing the current date and time
let dateNow = new Date();
// Create a Date object for a specific birthday (July 23, 2002)
let birthday = new Date("july 23 , 2002");
// Calculate the difference between the two dates in milliseconds
let dateDiff = dateNow - birthday;

// Convert milliseconds to seconds and display the result
console.log(`My age in seconds ${Math.floor(dateDiff / 1000)}`);
// Convert milliseconds to minutes (divide seconds by 60) and display the result
console.log(`My age in minutes ${Math.floor(dateDiff / 1000 / 60)}`);
// Convert milliseconds to hours (divide minutes by 60) and display the result
console.log(`My age in hours ${Math.floor(dateDiff / 1000 / 60 / 60)}`);
// Convert milliseconds to days (divide hours by 24) and display the result
console.log(`My age in days ${Math.floor(dateDiff / 1000 / 60 / 60 / 24)}`);
// Convert milliseconds to months (divide days by average days in a month) and display the result
// Note: 30.4375 is the average number of days in a month (365.25 ÷ 12)
console.log(
  `My age in Months ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30.4375)}`
);
// Convert milliseconds to years (divide days by days in a year) and display the result
// Note: 365.25 accounts for leap years (every 4 years)
console.log(
  `My age in Years ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25)}`
);
