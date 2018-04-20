/*
Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

function chooseMovies(flight, movies) {
  console.log(movies);
  let lookingFor = new Set();
  let halfTime = false;
  
  for (let i = 0; i < movies.length; i++) {
    // console.log(lookingFor);
    // console.log(i, movies[i]);
    lookingFor.add(flight - movies[i]);
    
    if (lookingFor.has(movies[i])) {
      if (movies[i] === flight / 2) {
        // console.log('hit');
        // console.log(indexes, lookingFor);
        if (halfTime === false) {
          halfTime = true;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
    // indexes.add(i);
    
  }
  
  return false;
}

console.log(chooseMovies(90, [60, 70, 30, 80, 45]) === true ? 'PASSED' : 'FAIL');

console.log(chooseMovies(90, [60, 70, 80, 80, 45]) === false ? 'PASSED' : 'FAIL');

console.log(chooseMovies(90, [60, 70, 80, 80, 45, 45]) === true ? 'PASSED' : 'FAIL');

console.log(chooseMovies(90, [80]) === false ? 'PASSED' : 'FAIL');

console.log(chooseMovies(90, [80, 10]) === true ? 'PASSED' : 'FAIL');

console.log(chooseMovies(90, [30, 30, 30]) === false ? 'PASSED' : 'FAIL');
