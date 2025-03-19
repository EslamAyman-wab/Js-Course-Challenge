// let start = 0;
// let swappedName = "elZerO";

// // Output
// "ELzERo"

// The Answer
let start = 0; // طريقة غير مباشرة للحصول على 0
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
    let char = swappedName[i];
    result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

console.log(result); // "ELzERo"

