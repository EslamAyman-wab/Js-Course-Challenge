// Define a function named `ageInTime` that takes one parameter: `theAge`.
function ageInTime(theAge) {
    // Check if `theAge` is less than 10 or greater than 100.
    if (theAge < 10 || theAge > 100) {
        // If `theAge` is outside the range, log "Age Out Of Range".
        console.log(`Age Out Of Range`);
        // Exit the function early since the age is invalid.
        return;
    }

    // Calculate the equivalent number of months for the given age.
    // 1 year = 12 months, so multiply `theAge` by 12.
    let months = theAge * 12;

    // Calculate the equivalent number of days for the given age.
    // 1 year = 365 days, so multiply `theAge` by 365.
    let days = theAge * 365;

    // Calculate the equivalent number of weeks for the given age.
    // 1 week = 7 days, so divide `days` by 7 and round down to the nearest whole number.
    let weeks = Math.floor(days / 7);

    // Calculate the equivalent number of hours for the given age.
    // 1 day = 24 hours, so multiply `days` by 24.
    let hours = days * 24;

    // Calculate the equivalent number of minutes for the given age.
    // 1 hour = 60 minutes, so multiply `hours` by 60.
    let minutes = hours * 60;

    // Calculate the equivalent number of seconds for the given age.
    // 1 minute = 60 seconds, so multiply `minutes` by 60.
    let seconds = minutes * 60;

    // Log the calculated values for years, months, weeks, days, hours, minutes, and seconds.
    console.log(`Year ${theAge} , Months ${months} , Weeks ${weeks} , Days ${days} , Hours ${hours} , Mints ${minutes} , Seconds ${seconds}`);
}

// Test cases for the `ageInTime` function:

// Call `ageInTime` with an age of 110.
// Since 110 is greater than 100, it logs "Age Out Of Range".
ageInTime(110); // Output: Age Out Of Range

// Call `ageInTime` with an age of 38.
// This is within the valid range, so it calculates and logs the breakdown of the age.
ageInTime(38);  // Output: Year 38 , Months 456 , Weeks 1978 , Days 13870 , Hours 332880 , Mints 19972800 , Seconds 1198368000

// Call `ageInTime` with an age of 22.
// This is within the valid range, so it calculates and logs the breakdown of the age.
ageInTime(22);  // Output: Year 22 , Months 264 , Weeks 1142 , Days 8030 , Hours 192720 , Mints 11563200 , Seconds 693792000