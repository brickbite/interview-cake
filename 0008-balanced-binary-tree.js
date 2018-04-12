// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

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



function isSuperbalanced(t, cur = 1, min = Infinity, max = -Infinity) {
  // traverse tree, track min and max depth
  // if diff > 1, return false;
  
  if (t.left === null && t.right === null) {
    console.log('leaf found!', t.value);
    return cur;
  }

  if (t.left !== null) {
    let left = isSuperbalanced(t.left, cur + 1);
    min = Math.min(left, cur);
    max = Math.max(left, cur);
  }
  
  if (t.right !== null) {
    let right = isSuperbalanced(t.right, cur + 1);
    min = Math.min(right, cur);
    max = Math.max(right, cur);
  }
  
  console.log(min, max);
  if (cur === 1) {
    return max - min > 1;
  } else {
    return cur;
  }
  
}










// superbalanced tree
// ==================
//     e
//   c   h
// b d  f  i
//       g   j

let e = new BinaryTreeNode(5);
let c = e.insertLeft(3);
c.insertRight(4);
c.insertLeft(2);
let h = e.insertRight(8);
let f = h.insertLeft(6);
let g = f.insertRight(7);
let i = h.insertRight(9);
let j = i.insertRight(10);

console.log(isSuperbalanced(e));


// not superbalanced tree (left higher)
// ==================
//     e
//   c   h
//      f  i
//       g   j


e = new BinaryTreeNode(5);
c = e.insertLeft(3);
h = e.insertRight(8);
f = h.insertLeft(6);
g = f.insertRight(7);
i = h.insertRight(9);
j = i.insertRight(10);

console.log(isSuperbalanced(e));

// not superbalanced tree (right higher)
// ==================
//      e
//    c   h
//   b d  f  i
//  a     g   
// z

e = new BinaryTreeNode(5);

c = e.insertLeft(3);
let d = c.insertRight(4);
let b = c.insertLeft(2);
let a = b.insertLeft(1);
let z = a.insertLeft(0);
h = e.insertRight(8);
f = h.insertLeft(6);
g = f.insertRight(7);
i = h.insertRight(9);

console.log(isSuperbalanced(e));

