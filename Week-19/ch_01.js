// This line creates a blueprint (class) for creating car objects
class Car {
  // The constructor is a special function that runs when we create a new car
  constructor(name, model, price) {
    // 'this' refers to the current car object being created
    // We're storing the car's name in a property called 'n'
    this.n = name;
    // We're storing the car's model in a property called 'm'
    this.m = model;
    // We're storing the car's price in a property called 'p'
    this.p = price;
    // Creating a method (function) called 'msg' that belongs to this car
    this.msg = function () {
      // This returns a string with the car's details using template literals (``)
      // ${} allows us to insert the values of variables into a string
      return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
    };
  }
  // This is another method that belongs to the car class
  Run() {
    // Simply returns a message when called
    return `Car Is Running Now`;
  }
}

// This is a commented-out older way to create objects using constructor functions
// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// Needed Output

// Creating a new car object named 'carOne' with the values "MG", 2022, and 420000
let carOne = new Car("MG", 2022, 420000);
// Calling the msg method of carOne and printing the result to the console
console.log(carOne.msg());
// Calling the Run method of carOne and printing the result to the console
console.log(carOne.Run());

// These lines don't actually do anything in the code - they're just showing the expected output
// They are string literals in parentheses that aren't assigned to anything or used anywhere
("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");
