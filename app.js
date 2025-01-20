require("./xyz.js");
const util = require("util"); //core module
const {x, calculateSum, calculateMultiply}= require("./calculate/index.js");

// import syntax of ES module
// import { x,  calculateSum } from "./sum.js";

const data = require("./data.json"); 
 

let name = "Node JS 04";
let a = 5; 
let b = 10;
let c = a + b; 



console.log(c);
calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);
console.log(data);
// console.log(util);