/** the PROBLEM with arrays
 *
 * for instance, create 100,000, then:
 * insert a new element at position 3
 * remove element at position 4
 * think about the operations that have to be carried out
 *
 * this section has NOT exercises
 */

let array = [];

// function to insert elements at a position
function insertAt(p, v) {
  array.splice(p, 0, v);
}

// function to delete an element at a position
function removeAt(p) {
  array.splice(p, 1);
}

// it fills the array with 10 random numbers
for (var i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 10 + 1);
}

// insert a element (123) at position 3
console.log("INSERTING THE ELEMENT: ");
console.log("Array before: " + array);
insertAt(3, 123);
console.log("Array after: " + array);
console.log("\n");

// remove the element at position 4
console.log("DELETING THE ELEMENT: ");
console.log("Array before: " + array);
removeAt(4);
console.log("Array after: " + array);
