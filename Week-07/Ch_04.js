// let index = 10;
// let jump = 2;

// for (;;) {
//   // Write Your Code Here
// }

// // Output
// 10
// 8
// 6
// 4

// The Answer

let index = 10;
let jump = 2;

let i = index;
for (;;) {
    console.log(i);
    i -= jump;
    if(i === jump){
        break;
    }
}
