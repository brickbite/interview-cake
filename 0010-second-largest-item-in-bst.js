/*
Write a function to find the 2nd largest element in a binary search tree.

A binary search tree is a binary tree in which, for each node:

The node's value is greater than all values in the left subtree.
The node's value is less than all values in the right subtree.
BSTs are useful for quick lookups. If the tree is balanced, we can search for a given value in the tree in O(\lg{n})O(lgn) time.
*/

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};



/*
written for Nth largest instead of 2nd largest.

n === 2 has a special case optimization based on examining the child node of the current node:
- if we traverse towards the right, and hit a node with a right child, and that child has no children, then the current node is the largest
- if the root is the max, then the left child node is the second largest
*/

function findNthLargest(tree, n) {

  let curr = null;
  let q = [tree];
  let max = {};
  
  for (let i = 1; i <= n; i++) {
    max[i] = -Infinity;
  }
  
  while (q.length > 0) {
    curr = q.shift();
    // console.log(curr.value);
    updateMaxObj(max, n, curr.value);
    
    if (curr.right) {
      q.push(curr.right);
    }
    
    if (curr.left) {
      q.push(curr.left);
    }
    
  }
  
  // console.log(max);
  return max[n];
}

function updateMaxObj(obj, n, val) {
  
  for (let i = 1; i <= n; i++) {
    
    if (val === obj[i]) {
      break;
    }
    
    if (val > obj[i]) {
      
      for (let j = n; j >= i; j--) {
        obj[j] = obj[j - 1];
      }
      
      obj[i] = val;
      break;
    }
  }
  
  return obj;
}

// let test = {1: -Infinity, 2: -Infinity, 3: -Infinity};
// let array = [1,2,5,7,5,23,4,9,5];

// for (let i = 0; i < array.length; i++) {
//   updateMaxObj(test, 3, array[i]);
//   console.log(test);
// }








// valid BinaryTree
//      4
//    2   6
//   1 3 5 7
// 


let a = new BinaryTreeNode(1);
let b = new BinaryTreeNode(2);
let c = new BinaryTreeNode(3);
let d = new BinaryTreeNode(4);
let e = new BinaryTreeNode(5);
let f = new BinaryTreeNode(6);
let g = new BinaryTreeNode(7);

// d is root
d.left = b;
d.right = f;
b.left = a;
b.right = c;
f.left = e;
f.right = g;

console.log(findNthLargest(d, 2) === 6 ? 'PASSED' : 'FAIL');
console.log(findNthLargest(d, 3) === 5 ? 'PASSED' : 'FAIL');

// invalid BinaryTree
//      4
//    1   5
//   2 3 6 7
// 

a = new BinaryTreeNode(1);
b = new BinaryTreeNode(2);
c = new BinaryTreeNode(3);
d = new BinaryTreeNode(4);
e = new BinaryTreeNode(5);
f = new BinaryTreeNode(6);
g = new BinaryTreeNode(7);

// d is root
d.left = a;
d.right = e;
a.left = b;
a.right = c;
e.left = f;
e.right = g;

console.log(findNthLargest(d, 2) === 6 ? 'PASSED' : 'FAIL');
console.log(findNthLargest(d, 3) === 5 ? 'PASSED' : 'FAIL');

// valid BinaryTree
//         7
//       5
//     3   6
//   2  4
//  1

a = new BinaryTreeNode(1);
b = new BinaryTreeNode(2);
c = new BinaryTreeNode(3);
d = new BinaryTreeNode(4);
e = new BinaryTreeNode(5);
f = new BinaryTreeNode(6);
g = new BinaryTreeNode(7);

// g is root
g.left = e;
e.left = c;
e.right = f;
c.left = b;
c.right = d;
b.left = a;

console.log(findNthLargest(g, 2) === 6 ? 'PASSED' : 'FAIL');
console.log(findNthLargest(g, 3) === 5 ? 'PASSED' : 'FAIL');

// invalid BinaryTree
//         7
//       5
//     3   6
//   2  1
//  4

a = new BinaryTreeNode(1);
b = new BinaryTreeNode(2);
c = new BinaryTreeNode(3);
d = new BinaryTreeNode(4);
e = new BinaryTreeNode(5);
f = new BinaryTreeNode(6);
g = new BinaryTreeNode(7);

// g is root
g.left = e;
e.left = c;
e.right = f;
c.left = b;
c.right = a;
b.left = d;

console.log(findNthLargest(g, 2) === 6 ? 'PASSED' : 'FAIL');
console.log(findNthLargest(g, 3) === 5 ? 'PASSED' : 'FAIL');

// invalid BinaryTree
//         6
//       5
//     3   7
//   2  4
//  1

a = new BinaryTreeNode(1);
b = new BinaryTreeNode(2);
c = new BinaryTreeNode(3);
d = new BinaryTreeNode(4);
e = new BinaryTreeNode(5);
f = new BinaryTreeNode(6);
g = new BinaryTreeNode(7);

// f is root
f.left = e;
e.left = c;
e.right = g;
c.left = b;
c.right = d;
b.left = a;

console.log(findNthLargest(f, 2) === 6 ? 'PASSED' : 'FAIL');
console.log(findNthLargest(f, 3) === 5 ? 'PASSED' : 'FAIL');
