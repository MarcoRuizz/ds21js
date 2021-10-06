// Marco Antonio Ruiz Orozco 3F

// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var max = parseInt(prompt("Enter the maximum value: "));

var random = Math.floor(Math.random() * max + 1);

console.log("The random number generated is: " + random);
