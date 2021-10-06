// Marco Antonio Ruiz Orozco 3F

/* create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 */

insertAt(3, 3);

function insertAt(p, v) {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log("Array before: " + array);

  array.splice(p, 0, v);

  console.log("Array after: " + array);
}
