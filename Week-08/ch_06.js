function multiply(...number) {
  let sum = 1;
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === "string" ) {
      continue;
    }
    
    // console.log(number[i]);
    sum *= Math.floor(number[i]);
  }
  console.log(sum);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
