let theNumber = 100020003000;

// Needed Output

let result = +[
  ...new Set(
    theNumber
      .toString()
      .split("")
      .filter((d) => d !== "0")
  ),
].join("");
console.log(result); // 123
