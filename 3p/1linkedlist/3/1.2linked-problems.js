/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 *
 * zeeAlso edmodo
 */
// Marco Antonio Ruiz Orozco 3 F

// function to generate random numbers between 1 - 10,000
function random(max) {
  return Math.floor(Math.random() * max + 1);
}

// global
var arraysteps = 0;
var linkedsteps = 0;
var averageTime = 0;
var averageSteps = 0;
var max = 10000;

// Array based implementation

// defining the stack

// constructor function
function stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

// puts the new element at the top position
function push(element) {
  this.dataStore[this.top++] = element;
}

// takes the element at the top position
function pop() {
  return this.dataStore[--this.top];
}

// returns the next value to leave the stack without removing it
function peek() {
  return this.dataStore[this.top - 1];
}

// returns how many elements are stored in the stack
function length() {
  return this.top;
}

// clears the stack
function clear() {
  this.top = 0;
}

// adding the elements to the stack
function arraybased() {
  var timeP = 0;
  var totalarraysteps = 0;

  // for loop to do 7 runs
  for (r = 0; r < 7; r++) {
    // Starts counting the time per run
    var timeS = performance.now();

    arraysteps = 0;

    var arraystack = new stack();

    for (i = 0; i < 10000; i++) {
      arraystack.push(random(max));
      arraysteps++;
    }

    // Ends counting the time per run
    var timeE = performance.now();
    var timeR = timeE - timeS;

    // Prints the steps and time per run
    console.log("Run # " + r + ":");
    console.log("Time: " + timeR);
    console.log("Steps: " + arraysteps);
    console.log("\n");

    var timeP = timeP + timeR;
    var totalarraysteps = totalarraysteps + arraysteps;
  }
  averageTime = timeP / 7;
  averageSteps = totalarraysteps / 7;
}

// Method to measure the time between the start and end of the execution of the array based implementation
console.log("ARRAY BASED IMPLEMENTATION: ");
arraybased();
console.log("The average time of the 7 runs was: " + averageTime);
console.log("The average of the steps need was: " + averageSteps);
console.log("\n");

// Linked list based implementation

// defining the stack

// constructor function

function stackUsingLL() {
  //Node
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  //To keep track of the size
  let length = 0;

  //To keep track of the list
  let head = null;

  //Push data in the stack
  this.push = function (elm) {
    //Create a new node
    let node = new Node(elm),
      current;

    //Add the new node at the top
    current = head;
    node.next = current;
    head = node;

    length++;
  };

  //Pop the item from the stack
  this.pop = function () {
    let current = head;

    //If there is item then remove it
    //and make the next element as the first
    if (current) {
      let elm = current.element;
      current = current.next;
      head = current;
      length--;
      return elm;
    }

    return null;
  };

  //Return the first element in the stack
  this.peek = function () {
    if (head) {
      return head.element;
    }

    return null;
  };

  //Check if stack is empty
  this.isEmpty = function () {
    return length === 0;
  };

  //Return the size of the stack
  this.size = function () {
    return length;
  };

  //Clear the stack
  this.clear = function () {
    head = null;
    length = 0;
  };
}

// adding the elements to the stack
function linkedlist() {
  var timeP = 0;
  var totallinkedsteps = 0;

  // for loop to do 7 runs
  for (r = 0; r < 7; r++) {
    // Starts counting the time per run
    var timeS = performance.now();

    linkedsteps = 0;

    var liststack = new stackUsingLL();

    for (i = 0; i < 10000; i++) {
      liststack.push(random(max));
      linkedsteps++;
    }

    // Ends counting the time per run
    var timeE = performance.now();
    var timeR = timeE - timeS;

    // Prints the steps and time per run
    console.log("Run # " + r + ":");
    console.log("Time: " + timeR);
    console.log("Steps: " + linkedsteps);
    console.log("\n");

    var timeP = timeP + timeR;
    var totallinkedsteps = totallinkedsteps + linkedsteps;
  }

  averageTime = timeP / 7;
  averageSteps = totallinkedsteps / 7;
}

// Method to measure the time between the start and end of the execution of the linked list based implementation
console.log("LINKED LIST BASED IMPLEMENTATION: ");
linkedlist();
console.log("The average time of the 7 runs was: " + averageTime);
console.log("The average of the steps need was: " + averageSteps);
console.log("\n");
