/*
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 6,
    height: 3,

};

Your output rectangle should use this format as well.
*/


function isLove(p1, p2) {
  let love = {
    leftX: null,
    bottomY: null,
    width: null,
    height: null
  };
  
  // console.log('p1: ', p1);
  // console.log('p2: ', p2);
  
  let xCross = false;
  let yCross = false;
  
  // test X overlap
  if (p1.leftX <= p2.leftX && p1.leftX + p1.width > p2.leftX) {
    xCross = true;
    love.leftX = p2.leftX;
    love.width = Math.min(p1.leftX + p1.width, p2.leftX + p2.width) - p2.leftX;
  } else if (p2.leftX <= p1.leftX && p2.leftX + p2.width > p1.leftX) {
    xCross = true;
    love.leftX = p1.leftX;
    love.width = Math.min(p2.leftX + p2.width, p1.leftX + p1.width) - p1.leftX;
  }
  
  // test Y overlap
  if (p1.bottomY <= p2.bottomY && p1.bottomY + p1.height > p2.bottomY) {
    yCross = true;
    love.bottomY = p2.bottomY;
    love.height = Math.min(p1.bottomY + p1.height, p2.bottomY + p2.height) - p2.bottomY;
  } else if (p2.bottomY <= p1.bottomY && p2.bottomY + p2.height > p1.bottomY) {
    yCross = true;
    love.bottomY = p1.bottomY;
    love.height = Math.min(p2.bottomY + p2.height, p1.bottomY + p1.height) - p1.bottomY;
  }
  
  // console.log('love is:');
  // console.log(love);
  
  return love;
}



console.log('===============');
console.log('TESTS');
console.log('===============');


console.log('===============');
console.log('Testing: same rectangle');
let you = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let me = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let test = isLove(you, me);

console.log(
  test.leftX === 1
    && test.bottomY === 1
    && test.width === 6
    && test.height === 3
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');




console.log('===============');
console.log('Testing: no touching at all');
you = { leftX: 1, bottomY: 1, width: 1, height: 1 };
me = { leftX: 3, bottomY: 4, width: 1, height: 1 };
test = isLove(you, me);

console.log(
  test.leftX === null
    && test.bottomY === null
    && test.width === null
    && test.height === null
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');




console.log('===============');
console.log('Testing: x overlap but no y intersect');
you = { leftX: 1, bottomY: 1, width: 4, height: 1 };
me = { leftX: 3, bottomY: 4, width: 1, height: 1 };
test = isLove(you, me);

console.log(
  test.leftX === 3
    && test.bottomY === null
    && test.width === 1
    && test.height === null
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');





console.log('===============');
console.log('Testing: y overlap but no x intersect');
you = { leftX: 1, bottomY: 1, width: 1, height: 4 };
me = { leftX: 3, bottomY: 4, width: 1, height: 1 };
test = isLove(you, me);

console.log(
  test.leftX === null
    && test.bottomY === 4
    && test.width === null
    && test.height === 1
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');



console.log('===============');
console.log('Testing: proper partial intersection');
you = { leftX: 1, bottomY: 1, width: 6, height: 3 }; // X 1-7
me = { leftX: 5, bottomY: 2, width: 3, height: 6 }; // X 5-8
test = isLove(you, me); // X 5-7

console.log(
  test.leftX === 5
    && test.bottomY === 2
    && test.width === 2
    && test.height === 2
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');



console.log('===============');
console.log('Testing: you in me');
you = { leftX: 1, bottomY: 1, width: 9, height: 9 };
me = { leftX: 2, bottomY: 2, width: 2, height: 2 };
test = isLove(you, me);

console.log(
  test.leftX === 2
    && test.bottomY === 2
    && test.width === 2
    && test.height === 2
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');



console.log('===============');
console.log('Testing: me in you');
you = { leftX: 2, bottomY: 2, width: 2, height: 2 };
me = { leftX: 1, bottomY: 1, width: 9, height: 9 };
test = isLove(you, me);

console.log(
  test.leftX === 2
    && test.bottomY === 2
    && test.width === 2
    && test.height === 2
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');



console.log('===============');
console.log('Testing: only share horizontal edge');
you = { leftX: 1, bottomY: 2, width: 1, height: 1 };
me = { leftX: 1, bottomY: 1, width: 1, height: 1 };
test = isLove(you, me);

console.log(
  test.leftX === 1
    && test.bottomY === null
    && test.width === 1
    && test.height === null
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');


console.log('===============');
console.log('Testing: only share vertical edge');
you = { leftX: 2, bottomY: 1, width: 1, height: 1 };
me = { leftX: 1, bottomY: 1, width: 1, height: 1 };
test = isLove(you, me);

console.log(
  test.leftX === null
    && test.bottomY === 1
    && test.width === null
    && test.height === 1
  ? 'PASSED'
  : 'FAILED' );
console.log('===============');
