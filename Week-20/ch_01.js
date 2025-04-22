let dateNow = new Date();
let birthday = new Date("july 23 , 2002");
let dateDiff = dateNow - birthday;

console.log(`My age in seconds ${Math.floor(dateDiff / 1000)}`);
console.log(`My age in minutes ${Math.floor(dateDiff / 1000 / 60)}`);
console.log(`My age in hours ${Math.floor(dateDiff / 1000 / 60 / 60)}`);
console.log(`My age in days ${Math.floor(dateDiff / 1000 / 60 / 60 / 24)}`);
console.log(
  `My age in Months ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30.4375)}`
);
console.log(
  `My age in Years ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365.25)}`
);
