import * as modOne from "./ch_08.1.js";
import * as modTwo from "./ch_08.2.js";

// Use the default export from mod-one as 'calc'
const calc = modOne.default;

console.log(calc(modTwo.numOne, modTwo.numTwo, modTwo.numThree)); // 60
