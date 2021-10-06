// Marco Antonio Ruiz Orozco 3F

// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var max = prompt("Enter the maximum value: ");

sieve(max);

function sieve(max) {
  var nums = [];

  // Fills all the array with true
  for (i = 0; i < max; i++) {
    nums[i] = true;
  }

  for (i = 2; i < max; i++) {
    // Fills with false all the multiples of each value in the for loop
    for (j = 2; i * j < max; j++) {
      nums[i * j] = false;
    }
  }

  var output = [];

  // All the elements in the array with true are added to the new one

  for (i = 0; i < max; i++) {
    if (nums[i]) {
      output.push(i);
    }
  }

  return output;
}
