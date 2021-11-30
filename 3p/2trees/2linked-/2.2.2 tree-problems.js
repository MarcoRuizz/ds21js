/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 *
 */

function posorder(n) {
  if (n !== null) {
    posorder(n.l);
    posorder(n.r);
    console.log(n.d);
  }
}

function Node(a) {
  this.d = a;
  this.l = null;
  this.r = null;
}

let grandfather = new Node("grandfather");
let dad1 = new Node("dad1");
let dad2 = new Node("dad2");
let children1 = new Node("children1");
let children2 = new Node("children2");
let children3 = new Node("children3");
let children4 = new Node("children4");

grandfather.l = dad1;
grandfather.r = dad2;
dad1.r = children1;
dad1.l = children2;
dad2.r = children3;
dad2.l = children4;

posorder(grandfather);
