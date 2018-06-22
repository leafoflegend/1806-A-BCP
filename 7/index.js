const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Our First Terrible Recursive Function
// const recursiveFunction = () => {
//   console.log('hi');

//   recursiveFunction();
// }

const aFunction = () => {
  console.log('a');

  const bFunction = () => {
    console.log('b');
  }

  bFunction();
}

// setTimeout(aFunction, 3000);
// aFunction();
// bFunction();

// Do aFunction and bFunction happen at the same time?

// Javascript can only do one thing at a time. This is called 'single threaded'. We refer to languages that can do lots of things at the same time as a 'multi threaded language'.

// Dual core vs Quad core?
// -> thats a reference to how many threads are available on your computer.
// Javascript can only use one -> so Javascript has to be very smart about how it handles operations where there is a lot going on...

const cFunction = () => {
  aFunction();

  console.log('c');
}

// cFunction();

// After running aFunction, and then bFunction inside of aFunction, Javascript needs to close bFunction, go back to aFunction, close aFunction, then go back to cFunction, how does Javascript know that there is more to do inside of cFunction?

// Javascript is actually 'pausing' functions that call another function. How it does this is by freezing that functions scope and memory -> and storing it in memory.
// Then, at a later time, it can resume that function.

// The name for this process is called 'The Call Stack'.

// Countdown

// Iterative
const iterativeCountdown = (ceiling) => {
  for (let i = ceiling; i > 0; --i) {
    console.log(i);
  }
}

// iterativeCountdown(5);

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);

// "Recursion is an Alternative to Iteration"
// Iteration is made up of the three same things every time: A Initialization (i = 0;), a Condition (i < array.length;), and an Update (++i);
// Recursion, as all Iterable solutions must, follows the same law of three. It must: start somewhere, end somewhere, and have a way of bringing the start closer to the end.
// They just have different names.
// In recursion we call Initialization (i = 0) - The argument. Recursion always starts with an argument, you know arguments already.
// We call the end (the Condition e.g. i < array.length) - the Base Case.
// We call the update (++i) - The Recursive Case.

// Argument we use to start things is ceiling: 5
const recursiveCountdown = (ceiling) => {
  // The base case which we use to end things is ceiling > 0;
  if (ceiling > 0) {
    console.log(ceiling);

    // The update that brings 5 closer to 0 - is us subtracting one in each function
    recursiveCountdown(ceiling - 1);
  }
}

// recursiveCountdown(5);

// Stacks and Queues in Comp Sci
// A Queue is something you know very well, first in first out -> you at a movie theatre or a show, or a restaurant. If you are the first in the line, you are the first of line.
// Stack is the opposite. Its first in, last out.
// A stack of pancakes. When we cook pancakes, the first pancake cooked is at the bottom of the plate. The last pancake cooked ends up on top of all the other pancakes... This means that the last pancake cooked is the first pancake eaten.

// Its the same thing with recursion. The last function called is the 'first one we can eat' And by that i mean it is the first return value we get.

const factorial = (aNum) => {
  if (aNum === 0 || aNum === 1) return 1;

  return aNum * factorial(aNum - 1);
}

// console.log(factorial(5));

// Log an Array

const anArray  = [1, 2, 3, 4, 5];

// console.log(anArray.slice(1));
// console.log(anArray.slice(2));
// console.log(anArray.slice(3));

//                 let i = 0 - starting at the full length
const logAnArray = (anArr) => {
  // i < arr.length -> run as long as there is length left
  if (anArr.length === 1) {
    console.log(anArr[0]); 
  } else {;
    // console.log(arr[i]); - log the current element (in this case index 0)
    console.log(anArr[0]);
    // ++i -> then make sure the array moves forward by 1 -> here i am removing the zeroeth element, and passing an array one shorter into the function call... eventually, there will be no elements left.

    // const nextArray = [];

    // for (let i = 1; i < anArr.length; ++i) {
    //   nextArray.push(anArr[i]);
    // }

    // logAnArray(nextArray);
    logAnArray(anArr.slice(1));
  }
}

logAnArray(anArray);

