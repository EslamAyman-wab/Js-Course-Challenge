// Different date formats we want to match
let date1 = "25/10/1982"; // Format: DD/MM/YYYY
let date2 = "25 - 10 - 1982"; // Format: DD - MM - YYYY
let date3 = "25 10 1982"; // Format: DD MM YYYY
let date4 = "25 10 82"; // Format: DD MM YY

// Regular expression to match these date patterns:
const re = /\d{2}([\/ ] *-? *)\d{2}\1\d{2,4}/g;

/*
Breaking down the regular expression:
\d{2}    - Matches exactly 2 digits (the day)
([\/ ] *-? *) - This is a capture group that matches:
    [\/ ]  - Either a forward slash OR a space
     *     - Followed by zero or more spaces
    -?     - Followed by an optional hyphen
     *     - Followed by zero or more spaces
\d{2}    - Matches exactly 2 digits (the month)
\1       - Matches the same separator we captured earlier (either / or space with optional hyphens)
\d{2,4}  - Matches 2 to 4 digits (the year, either YY or YYYY format)
/g       - Global flag to search for all matches in a string
*/

// Test the regular expression against each date format
console.log(date1.match(re)); // Matches "25/10/1982" because it fits the DD/MM/YYYY pattern
console.log(date2.match(re)); // Matches "25 - 10 - 1982" because it fits the DD - MM - YYYY pattern
console.log(date3.match(re)); // Matches "25 10 1982" because it fits the DD MM YYYY pattern
console.log(date4.match(re)); // Matches "25 10 82" because it fits the DD MM YY pattern
