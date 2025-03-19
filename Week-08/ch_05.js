// Define a function named `createSelectBox` that takes two parameters: `startYear` and `endYear`
function createSelectBox(startYear, endYear) {
    
    // Start a `for` loop that iterates from `startYear` to `endYear - 1`
    for(let i = startYear; i < endYear; i++){
        // Use `document.write` to generate an HTML `<option>` element for each year
        // The `value` attribute of the `<option>` is set to the current year (`i`)
        // The text displayed in the dropdown will also be the current year (`i`)
        document.write(`<option value = ${i}>${i}</opthion>`);
    }
}

// Call the `createSelectBox` function with `startYear` as 2000 and `endYear` as 2021
// This will generate `<option>` elements for the years 2000 to 2020
createSelectBox(2000, 2021);