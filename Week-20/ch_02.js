// Create date for Jan 1, 1980 at 00:00:01 GMT+0200
// This line creates a new Date object (a built-in JavaScript object for working with dates and times)
const dateNow = new Date(1980, 0, 1, 0, 0, 1);
// Parameters in the Date constructor:
// 1980 = the year (4-digit number)
// 0 = the month (0-11, where 0 is January, 1 is February, etc.)
// 1 = the day of the month (1-31)
// 0 = hours (0-23)
// 0 = minutes (0-59)
// 1 = seconds (0-59)
// Note: When we don't specify a timezone, JavaScript uses the user's local timezone

// This displays our date object in the console
console.log(dateNow);
// When a Date object is logged, JavaScript automatically converts it to a readable string format

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// This is how the date should appear in the console:
// - Day of week (Tue)
// - Month (Jan)
// - Day (01)
// - Year (1980)
// - Time (00:00:01)
// - Timezone information (GMT+0200)
