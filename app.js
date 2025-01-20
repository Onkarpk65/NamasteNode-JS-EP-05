require("./xyz.js");
const {x, calculateSum, calculateMultiply}= require("./calculate/index.js");



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
