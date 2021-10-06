// Marco Antonio Ruiz Orozco 3F

// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises

// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

var Map = new Map();
var timeR = 0;

// for loop to do 7 runs

for (r = 0; r < 7; r++) {
  // Starts counting the time per run

  var timeS = new Date();

  // Generates 1e5 times a random number between 1 - 1e5 (100,000) and add it to the map concatenated with the string 'name'

  for (i = 0; i < 100000; i++) {
    var number = Math.floor(Math.random() * 100000 + 1);
    Map.set(i, "name" + number);
  }

  // Ends counting the time per run

  var timeE = new Date() - timeS;
  var timeR = timeR + timeE;

  console.log(Map);
  console.log(timeE);
}

var average = timeR / 7;
console.log("The average of the 7 runs was: " + average);
