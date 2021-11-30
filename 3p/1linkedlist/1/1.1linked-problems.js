/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
// node class
function Node(data) {
  this.data = data;
  this.next = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

var v = parseInt(prompt("Insert the number to search in the linked list: "));

const contains = (n) => {
  //es6
  var cont = false;
  let c = n; //iterator
  while (c) {
    //exists
    if (c.data == v) {
      var cont = true;
    }
    c = c.next;
  }

  return cont;
};

contains(node1);
