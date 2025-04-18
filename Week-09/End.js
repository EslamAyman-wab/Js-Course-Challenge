/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = (...names) => {
  // Format each name as [Name], then join with commas
  const formattedNames = names.map((name) => `[${name}]`).join(", ");
  return `${formattedNames} => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => `The Sum ${one + two + nums.reduce((a, b) => a + b, 0)}`;

console.log(calc(10, 20, 50)); // 80
