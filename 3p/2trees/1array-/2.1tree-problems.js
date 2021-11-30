/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * array-based implementation of trees
 *
 * write it and make sure it runs
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}

// create nodes with values
const grandfather = new TreeNode("grandfather");
const dad1 = new TreeNode("dad1");
const dad2 = new TreeNode("dad2");
const child1 = new TreeNode("child1");
const child2 = new TreeNode("child2");
const child3 = new TreeNode("child3");

grandfather.descendants.push(dad1, dad2);
dad1.descendants.push(child1, child2);
dad2.descendants.push(child3);

function show(a) {
  console.log(a);
}

show(grandfather);
show(dad1);
show(dad2);
