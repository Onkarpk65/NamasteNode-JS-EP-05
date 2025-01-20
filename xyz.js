(function (module) {

    //All the code is wrapped inside here 
    function calculateMultiply(a, b) {
        const result = a * b; 
        console.log(result);
    } 

    module.exports = { calculateMultiply };

}(module));