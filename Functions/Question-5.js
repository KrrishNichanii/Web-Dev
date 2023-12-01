// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

const fact = function (num) {
    if(num==1) return 1;

    return num * fact(num-1);
}
 
const a=6
const b=9
console.log(`Factorial of ${a} is ${fact(a)}`);
console.log(`Factorial of ${b} is ${fact(b)}`);