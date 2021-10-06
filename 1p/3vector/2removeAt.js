// Marco Antonio Ruiz Orozco 3F

/* create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 */
removeAt(3);

function removeAt(p) {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log("Array before: " + array);

  array.splice(p, 1);

  console.log("Array after: " + array);
}
