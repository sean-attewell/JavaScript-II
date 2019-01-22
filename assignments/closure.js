// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outerscope() {
  let invar = "this is from the outer."
  return function innerscope() {
    console.log(`inner grabbing from the outer: ${invar}`)
  }
}

let parentReturnsInnerFunction = outerscope();

parentReturnsInnerFunction()


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let score = 0;
  return function inner() {
    return ++ score;
  }
};

const newcounter = counter();

console.log(newcounter()); 
console.log(newcounter()); 
console.log(newcounter()); 
console.log(newcounter()); 
console.log(newcounter()); 

const newcounter2 = counter();

console.log(newcounter2())
console.log(newcounter2())
console.log(newcounter2())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
