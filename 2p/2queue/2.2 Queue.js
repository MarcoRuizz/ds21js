/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 */

// We begin our queue implementtation by defining the constructor function for a queue
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

// The enqueue() function adds an element to the end of a queue:
function enqueue(element) {
  this.dataStore.push(element);
}

//The dequeue() function removes an element from the front of a queue:
function dequeue() {
  return this.dataStore.shift();
}

//We can examine the front and back elements of a queue using these functions:
function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

// We also need a toString() function to display all the elements in a queue:
function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

//Finally, we need a function that lets us know if a queue is empty:
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

// IMPLEMENTATION

// Now we can use our queue function
var queue1 = new Queue();

// We add some names to our stack
queue1.enqueue("Juan");
queue1.enqueue("Emiliano");
queue1.enqueue("Beto");
queue1.enqueue("Marco");
queue1.enqueue("Pablo");

console.log(queue1.toString());
queue1.dequeue();
console.log(queue1.toString());
console.log("Front of queue: " + queue1.front());
console.log("Back of queue: " + queue1.back());
