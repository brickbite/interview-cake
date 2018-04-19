/*
Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.
*/


function mergeRanges(r) {
  const newRanges = [];
  
  // find # of intersections = len
  let intersections = 0;
  
  for (let i = 0; i < r.length; i++) {
    let a = r[i];
    // let intersected = false;
    // let merged = {};
    
    for (let j = i + 1; j < r.length; j++) {
      let b = r[j];
      if (a.endTime >= b.startTime) {
        console.log('intersection found');
        intersections++;
        break;
        // intersected = true;
        // merged.startTime = a.startTime;
        // merged.endTime = b.endTime;
        // merged = mergeRanges(r.slice(j, r.length));
      }
    }
    
    // if (!intersected) {
    //   newRanges.push(a);
    // } else {
    //   newRanges.push(merged);
    // }
  }
  
  let curr = 0;
  let found = new Set();
  found.add(curr);
  
  let temp = {
    startTime: r[curr].startTime,
    endTime: r[curr].endTime
  };
  
  // for (let k = 0; k < 2; k++) {
  while (newRanges.length < r.length - intersections) {
    console.log(curr, found, temp);
    console.log(newRanges);
    let merged = false;
    
    if (found.has(curr)) {
      console.log('element used, moving on');
      curr++;
      temp = {
        startTime: r[curr].startTime,
        endTime: r[curr].endTime
      };
    }
    
    // compare against others
    for (let i = 0; i < r.length; i++) {
      console.log(i);
      if (r[curr].endTime >= r[i].startTime && !found.has(i)) {
        console.log('hit');
        merged = true;
        found.add(i);
        temp.startTime = r[curr].startTime;
        temp.endTime = r[i].endTime;
      }
      
      if (r[curr].startTime >= r[i].endTime && !found.has(i)) {
        console.log('hit');
        merged = true;
        found.add(i);
        temp.startTime = r[i].startTime;
        temp.endTime = r[curr].endTime;
      }
    }
    
    if (!merged) {
      console.log('no merge found, adding to final array');
      newRanges.push(temp);
      curr++;
      temp = {
        startTime: r[curr].startTime,
        endTime: r[curr].endTime
      };
      found.add(curr);
    }
  }
  
  return newRanges;
}



let a1 = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

let b1 = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
];

console.log(mergeRanges(a1));
