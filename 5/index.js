const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Functions
// Functions are just objects.

// function someFunction () {
//   console.log('hi im a function');
// }

// someFunction.lisseth = function () {
//   console.log('Hi im lisseth');
// }

// someFunction.emad = 'Georgy';

// someFunction();
// someFunction.lisseth();
// console.log(someFunction.emad);

// What seems to make functions different from a normal object?
// functions arent written the same way
let variableThing = {};
// with functions we dont typically
// function anotherFunction () {};

// There is a massive difference between these two things... so theres one.

// Some functions dont need to have a definition. -> functions can be ANONYMOUS.
// Theres like 40 ways to write a function.

// 3rd one is big

// let someObject = {};

// Can i do this:
// someObject();

// Invoking - Invocation
// Functions are invokable - no other objects in Javascript are.
// This is a reserved privelage of functions.

// Under the hood -> when you define a function javascript actually stores the code you wrote on a property called: 'definition';

// No its not stored as a string.
// someFunction.definition = 'your code here';
// When we later say () -> it goes and runs the code.
// We know if we put things in between () -> it knows how to pass those along to the function.

// What does a function being an object mean for us?

/*
1. Because a function is an object, it can be passed into a function as an argument the same as any other object. This use of a function is called a callback.
2. Because a function is an object, it can be returned from a function as a return value. This is called a factory function - and is a very useful high level ability in javascript. This can create a complex behavior called 'closure'.
*/

const aBoringFunction = (anObj) => {
  console.log(anObj);
  anObj();
}

const someObject = {
  class: true,
};

const aCallbackFunction = () => {
  console.log('Im a callback');
}

// aBoringFunction(aCallbackFunction);

// const anArray = [];

// anArray.push(aCallbackFunction);

// console.log(anArray);

// Functions ARE JUST ANOTHER VALUE. THEY CAN BE USED THE SAME WAYS AS ANY OTHER OBJECT (PLUS SOME MORE)

// What is the purpose of this? And does it have value?

// Yes, this solves a big problem that you have never thought of.

// How would I say in code, I want to do something IN 3 SECONDS?

// Callback (the term) comes from this problem. E.g. I give you a call, you dont answer, but i expect an action to happen at a later time (you calling me back).

// const thingToDoLater = () => {
//   console.log('I happened 3 seconds from now.');
// }

// setTimeout(thingToDoLater, 3000);

// console.log('Hi I also want to happen.');

// This is a very hard problem to describe in code.
// If we didnt write a callback function we might write code to do this another way...

// wait 3000

// do console.log('hi i happened');

// do console.log('i also want to happen'); // -> this would now have to wait for the previous thing to finish

// We want to be able to describe FUTURE BEHAVIOR.
// Callbacks are best described as a CONTRACT. It is a contract in the sense that we give a behavior to happen in the future to another function. It promises us two things: WHEN its going to call the function we gave it, AND WITH WHAT it is going to pass in as arguments to that function.

// When I call you, I EXPECT you to CALL ME BACK within 24 HOURS. (thats the when) THE WHAT: is probably dependent on the conversation that we are having. If im calling about dinner, probably whether youre coming. If im calling about rent, whether you have it or not.

// Is the internet. Callbacks came from the internet. Where we have to TRY to communicate with a website, in hopes that it will A: respond, and B: respond with certain stuff. When we 'call' google, we dont know when its going to call back exactly, but we do know with what: googles home page. That the second thing callbacks attempt to handle is more complex: uncertainity.




// Example 1: Callbacks as Future Events
// Composition
// function calculate (oneFunc, twoFunc, aNum) {
//   console.log('Beginning Number: ', aNum);
//   const firstResult = oneFunc(aNum);
//   console.log('First Result: ', firstResult);
//   const secondResult = twoFunc(firstResult);
//   console.log('Final Result: ', secondResult);

//   return secondResult;
// }

const addTwoNums = (numOne, numTwo) => numOne + numTwo;
const addTwo = aNum => aNum + 2;
const multiplyByTwo = aNum => aNum * 2;

// calculate(addTwo, multiplyByTwo, 2);

// const fancyCompose = (valOne, valTwo, ...funcs) => {
//   let result = null;

//   for (let i = 0; i < funcs.length; ++i) {
//     const currentFunc = funcs[i];

//     if (i === 0) result = currentFunc(valOne, valTwo);
//     else result = currentFunc(result);
//   }

//   return result;
// }

// console.log(fancyCompose(5, 5, addTwoNums, addTwo, multiplyByTwo, (val) => `Value:${val}`));

// The above compose is what we call FUNCTIONAL PROGRAMMING, and we would be amiss to speak about higher order functions and not bring it up. It is what I would call a very hot topic in programming in 2018: Functional Programming or FP for short can be summarized simply: Have programming look as close to math as possible, do not allow reassignment of values pass in as args, and try to use the power of functions instead of the power of endless blocks of code.

// A more traditional use of callbacks in programming is to do something youve been doing all along! ...

// Iteration -> writing a lot of code in for loop bodies.
// One of the things we can do with callbacks, is define for loops bodies somewhere else. This enables us to be DRY - e.g. DO NOT REPEAT YOURSELF because we sometimes find ourselves using the same code over and over.
// for (let i = 0; i < anArray.length; ++i) {
//   // do something
// }

// logAnArray

// const someArray = [1, 2, 3, 4, 5];

// const doAnythingWithAnArray = (someArray, callback) => {
//   for (let i = 0; i < someArray.length; ++i) {
//     const currentElem = someArray[i];

//     callback(currentElem);
//   }
// }

// const logAnElem = (anElem) => {
//   console.log(anElem);
// }

// let sum = 0;

// const sumAnArray = (anElem) => {
//   sum += anElem;
// }

// doAnythingWithAnArray(someArray, logAnElem);
// doAnythingWithAnArray(someArray, sumAnArray);

// console.log(sum);

// Javascript wanted this too. Soooooo, they built in a bunch of array methods that accept callbacks.

const someArray = [1, 2, 3, 4, 5];

const inspectForEach = (elem, i, anArray) => {
  console.log('Index: ', i);
  console.log('Elem: ', elem);
  console.log('The Array: ', anArray);
}

// someArray.forEach(inspectForEach);

// const myForEach = (anArr, callback) => {
//   for (let i = 0; i < anArr.length; ++i) {
//     const currentElem = anArr[i];

//     callback(currentElem, i, anArr);
//   }
// }

// myForEach(someArray, inspectForEach);

// If you dont plan to reuse a function, you shouldnt name it.

// Non Sequitar
// Hoisting

// Hoisting is a magical process that completely screws with your head on how things are supposed to work.

// anotherFunction();
// someFunction();

// function someFunction () {
//   console.log('hi');
// }

// const anotherFunction = () => {
//   console.log('hi again');
// }

// "semi colons are optional"

// Semi Colons are not optional, but JavaScript when given the choice between trust our users to do the right thing even if it takes longer, and trust no one make everything work -> always takes the latter. JavaScript will 10 times out of 10 choose to not trust you and do everything in its power to make code work.

// One of the things it does to do that is to take whats called a 'First Pass' over your code. This is the human equivelent of a roughdraft. Javascript says "hey cool code, can i check it out" before it runs it because it secretly wants to correct your code.

// Some of the various things it does during this process:
// Add semi colons everywhere you forgot (why people say 'semi colons are optional')
// Allocate memory to the proper places
// Make sure that all your undefined variables continue to work
// Hoisting -> Hoisting is when Javascript moves your code around.

// let thing;

// console.log(thing);

// Left side  = Right side
// let someThing = 'another thing';

// The left side is us asking our computer (with javascript as our messenger) for a reference. References are just a place in memory. They look like this: 0x12931823
// The right side is us asking our computer (again with javascript as our messenger) to put stuff at that reference. References are literal physical places in our reality. Theyre very small, its inside your computer but its a real thing and its not just weird magic weirds on a glowing screen. When you use an = sign next to a reference you are saying (imagine a wizards voice): "YOU ARE NOW REAL"

// In other languages you have to actually figure this all out on your own (sound fun?) - this sucks. This is like years of crying in a corner in college. Javascript saves you from this.

// var #place = request 8 byte;
// // #place = 0x182361872398 -> can hold 8 numbers

// int myInts = [1, 2, 3, 4, 5, 6, 7] -> #place

// Javascript does all of that for you!!!
// Hoisting

// Is on the first pass (that secret moment before javascript runs your code) -> javascript is actually creating all the requests for memory and their sizes without you knowing... well i just said that was the left side of this problem

// On the firts pass javascript takes the below code and says:
// let someThing = 'another thing';

// First pass = 

// let someThing; // === 0x18927318723

// So now 'someThing' exists. Its a place on your computer, it just doesnt have anything there yet.

// Second pass (e.g. your code actually running):

// someThing = 'anotherThing';

// console.log(someThing);

// var someThing = 'another thing';

// This doesnt break because it actually looks like:

/*
var someThing;

console.log(someThing);

someThing = 'another thing';
*/

// anotherFunc();

someFunc();

function someFunc () {
  console.log('hi');
}

// var hi = 'aksjdbalksda';

// var anotherFunc = function () {
//   console.log('hi again!');
// }

// when we say function with an EQUALS SYMBOL we are not requesting memory -> we are saying: shove this value into memory right now. We are cheating the system.