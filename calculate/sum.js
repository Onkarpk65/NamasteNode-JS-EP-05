let x = 'exports in React exports in Node';

z = "Non strict mode demo";

function calculateSum(a, b) {
    let sum = a + b;
    console.log('result of calculate sum: ', sum);
}

console.log(module.exports);


module.exports = {
    x,
    calculateSum,
}

