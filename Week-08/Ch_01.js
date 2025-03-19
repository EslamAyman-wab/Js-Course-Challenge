// function sayHello(theName, theGender) {
//     // Your Code Here
//   }
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"



function sayHello(theName, theGender) {
    if(theGender === "Male"){
        theGender = "Mr";
    } else if (theGender === "Female"){
        theGender = "Miss"
    }else {
        theGender = ""
    }
    if (theGender){
        console.log(`Hello ${theGender} ${theName}`);
    }else{
        console.log(`Hello ${theName}`);
        
    }
}
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"