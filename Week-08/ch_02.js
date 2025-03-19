// Define a function named `calculate` that takes three parameters:
// `firstNum`, `secondNum`, and `operation`.
function calculate(firstNum, secondNum, operation) {
    // Check if the `secondNum` parameter is undefined (not provided).
    if (secondNum === undefined) {
        // If `secondNum` is not provided, log a message to the console.
        console.log(`Second Number Not Found`);
        // Exit the function early since `secondNum` is required for calculations.
        return;
    }

    // Check if the `operation` parameter is 'multiply'.
    if (operation == 'multiply') {
        // If the operation is 'multiply', log the result of multiplying `firstNum` and `secondNum`.
        console.log(firstNum * secondNum);
    } 
    // If the operation is not 'multiply', check if it is 'subtract'.
    else if (operation == 'subtract') {
        // If the operation is 'subtract', log the result of subtracting `secondNum` from `firstNum`.
        console.log(firstNum - secondNum);
    } 
    // If the operation is neither 'multiply' nor 'subtract', assume it is 'add' (default behavior).
    else {
        // Log the result of adding `firstNum` and `secondNum`.
        console.log(firstNum + secondNum);
    }
}

// Test cases for the `calculate` function:

// Call `calculate` with only one argument (20).
// Since `secondNum` is not provided, it will log "Second Number Not Found".
calculate(20); // Output: Second Number Not Found

// Call `calculate` with two arguments (20 and 30).
// Since no operation is provided, it defaults to addition and logs the sum (50).
calculate(20, 30); // Output: 50

// Call `calculate` with three arguments (20, 30, 'add').
// The operation is 'add', so it logs the sum (50).
calculate(20, 30, 'add'); // Output: 50

// Call `calculate` with three arguments (20, 30, 'subtract').
// The operation is 'subtract', so it logs the result of subtraction (-10).
calculate(20, 30, 'subtract'); // Output: -10

// Call `calculate` with three arguments (20, 30, 'multiply').
// The operation is 'multiply', so it logs the result of multiplication (600).
calculate(20, 30, 'multiply'); // Output: 600