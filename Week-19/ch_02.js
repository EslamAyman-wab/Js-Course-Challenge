// This is the parent class that defines what a basic phone is
class Phone {
  // The constructor is like a blueprint that runs when we create a new phone
  constructor(name, serial, price) {
    // These lines store the information for each phone
    this.name = name; // Save the phone's name (like "iPhone")
    this.serial = serial; // Save the phone's serial number
    this.price = price; // Save the phone's price
  }
}

// Write Tablet Class Here

// Tablet class inherits from Phone (it's a special type of Phone)
class Tablet extends Phone {
  // This constructor runs when we create a new tablet
  constructor(name, serial, price, size = "Unknown") {
    // super calls the parent (Phone) constructor to set up name, serial, price
    super(name, serial, price);
    // Add an extra property that only tablets have
    this.size = size; // Size in inches (if not provided, default is "Unknown")
  }
  // This is a method (function) that belongs to Tablet objects
  fullDetails() {
    // Return a formatted string with the tablet's information
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    // ^ Removed the space at the start
  }
}

// Create three different tablet objects
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9); // iPad with 12.9" screen
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5); // Nokia with 10.5" screen
let TabletThree = new Tablet("LG", 250450650, 650); // LG with size not specified

// Print the details of the first tablet
console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

// Print the details of the second tablet
console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

// Print the details of the third tablet (notice it uses the default "Unknown" size)
console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
