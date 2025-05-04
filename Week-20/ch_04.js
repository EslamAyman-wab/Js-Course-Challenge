// Method 1: ISO String with GMT+0300
// Creates a date using an ISO 8601 formatted string
// This specifies July 23, 2002 at midnight with an offset of +3 hours from UTC/GMT
// The "+03:00" part means this time is 3 hours ahead of UTC
let Mydate1 = new Date("2002-07-23T00:00:00+03:00");

// Method 2: Local Date (using local system timezone)
// Creates a date using individual components in local timezone
// Note: Months in JavaScript are 0-indexed, so 6 means July (not June!)
// This creates July 23, 2002 at midnight in your computer's timezone
let Mydate2 = new Date(2002, 6, 23, 0, 0, 0);

// Method 3: UTC with adjustment
// Creates a date using UTC (Coordinated Universal Time)
// The -3 for hours tries to offset by -3 hours from UTC
// However, negative hours will actually roll back the date rather than setting timezone
// This would create July 22, 2002 at 21:00:00 UTC (not July 23 with a timezone offset)
let Mydate3 = new Date(Date.UTC(2002, 6, 23, -3, 0, 0));

// Prints all three date objects to the console
// Each will show the same date but potentially in different timezones/formats
console.log(Mydate1);
console.log(Mydate2);
console.log(Mydate3);
