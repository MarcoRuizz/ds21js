/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */

// We begin our stack implementtation by defining the constructor function for a stack
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

// It stores in the top position and increment the top variable
function push(element) {
  this.dataStore[this.top++] = element;
}

// It deletes the element in the top of the stack
function pop() {
  return this.dataStore[--this.top];
}

// It shows the element in the top of the stack without deleting it
function peek() {
  return this.dataStore[this.top - 1];
}

// It shows how many elements are stored in the stack
function length() {
  return this.top;
}

// It cleans all the stack and set the top variable to 0
function clear() {
  this.top = 0;
}

// IMPLEMENTATION

// Now we can use our stack function
var stack1 = new Stack();

// We add some names to our stack
stack1.push("Juan");
stack1.push("Emiliano");
stack1.push("Beto");
stack1.push("Marco");
stack1.push("Pablo");

// We can print the length of our stack
console.log("The length of your stack is: " + stack1.length());

// We can also print the peek of the stack
console.log("peek: " + stack1.peek());

// We can delete the element in the top of the stack
var deleted = stack1.pop();
console.log("The element deleted is: " + deleted);

console.log(stack1.peek());
stack1.push("Silvia");
console.log(stack1.peek());

// We can clear our stack
stack1.clear();

console.log("The length of your stack is: " + stack1.length());
console.log(stack1.peek());
stack1.push("Clay");
console.log(stack1.peek());
