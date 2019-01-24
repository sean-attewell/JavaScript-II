// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.
console.log("SANITY CHECK!")
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function (len) {
  console.log(len)
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1])
}

last(items, function(thelast) {
  console.log(thelast);
})


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const ans = x + y;
  return cb(ans);
}

sumNums(4, 5, function(answer) {
  console.log(answer)
})


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const ans = x * y;
  return cb(ans);
}

multiplyNums(3, 5, function(answer) {
  console.log(answer)
})


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.find(function(element) {return element === item})) {
    cb(true)
  } else {
    cb(false)
  }
}

contains('asdads', items, function(result) {
  console.log(result);
})


// with ES6:
// list.find(element => element === item)
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
