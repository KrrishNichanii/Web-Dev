// Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function addTwoNumbers( a ,b)  {
    return a+b;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
           
            return fn.apply(this, args);
        } else {
            
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}
const curriedAdd = curry(addTwoNumbers)

console.log(curriedAdd(2)(3));
console.log(curriedAdd(4)(3));
