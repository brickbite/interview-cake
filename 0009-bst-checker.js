/*
Write a function to check that a binary tree ↴ is a valid binary search tree.

A binary search tree is a binary tree in which, for each node:

The node's value is greater than all values in the left subtree.
The node's value is less than all values in the right subtree.
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


function isValidBST(tree, leftLimit, rightLimit) {
  
  leftLimit = (typeof leftLimit !== 'undefined') ? leftLimit : -Infinity;
  rightLimit = (typeof rightLimit !== 'undefined') ? rightLimit :  Infinity;
  
  if (!tree) {
    return true;
  }
  
  if (!tree.left && !tree.right) {
    return true;
  }

  // console.log(`value: ${tree.value}, leftLimit: ${leftLimit}, rightLimit: ${rightLimit}`);
  
  if (tree.left) {
    // console.log('left: ', tree.left.value);
    if (tree.left.value >= tree.value) {
      console.log('hit left false');
      return false;
    }
    if (tree.left.value <= leftLimit) {
      console.log('hit leftLimit false');
      return false;
    }
  }
  
  if (tree.right) {
    // console.log('right: ', tree.right.value);
    if (tree.right.value <= tree.value) {
      // console.log('hit right false');
      return false;
    }
    if (tree.right.value >= rightLimit) {
      // console.log('hit rightLimit false');
      return false;
    }

    // leftLimit = tree.value;
  }
  
  return isValidBST(tree.left, leftLimit, tree.value) && isValidBST(tree.right, tree.value, rightLimit);
}




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

console.log(isValidBST(d) === true ? 'PASSED' : 'FAIL');

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

console.log(isValidBST(d) === false ? 'PASSED' : 'FAIL');


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

console.log(isValidBST(g) === true ? 'PASSED' : 'FAIL');


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

console.log(isValidBST(g) === false ? 'PASSED' : 'FAIL');


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

console.log(isValidBST(f) === false ? 'PASSED' : 'FAIL');
