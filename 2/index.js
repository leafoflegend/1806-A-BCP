const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const anArray = [1, 2, 3];

const one = 1;
const two = 2;
const three = 3;

// Arrays belong to one variable - Memory - This doesnt even matter
// Dynamic nature of arrays : strings are immutable and arrays are mutable, e.g. we can modify the array to do a lot of different things, flexibility - Big win: Methods, indexOf, slice


// 100% : Everything is easier to access : Agreement
// Arrays were built for your ease of use.
// Were promised order, arrays promise us some sense of numerical order
// we know if we say push, it goes to the end, unshift it goes to the beginning, etc.
// You dont need to remember a billion different variable names, you can just store everything in an array.
// Arrays provide us order, which in turn provides us a way to sanely use loops
// Arrays provide us with built-in methods, complicated functionality that helps us solve problems faster.

// Today, e.g. Arrays II - What are some of these other methods that might be beneficial to us?

// For every method we discuss you should know two very important things:
// 1. Does the method MUTATE the array it is being called on?
// 2. What does the method return?

// Splice
// Splice is actually one of the most powerful array methods. And its extremely annoying to write yourself. (Im almost positive thats a question tonight)
// Splice is a method that can do almost anything to an array - but namely - it mutates an array.
// It can: remove things from any place in an array, whether that be 1 thing or multiple things
// It can: add things to any place in an array, whether that be 1 thing or multiple things
// It returns whatever you remove from an array

const testArray = [1, 2, 3, 4, 5];

// What is the zeroeth and the first arg of splice?
// Zeroeth is an index - startIndex
// Zeroeth argument of splice is: "Where do i start?" the startIndex
// First arg - deleteCount
// deleteCount - it deletes however many elements you specify as a number
// What if i delete more then there are?
// JS will only delete up to the remaining elements after the startIdx

// Example 1
// const resultOfSplice = testArray.splice(0, 100);

// Example 2
// Splice takes infinite arguments. Every argument after startIndex and deleteCount gets added, in order starting from the position of the deleted elements.

// const resultOfSplice = testArray.splice(2, 1, 'Eliot was here', 99, false);

// console.log('result: ', resultOfSplice);
// console.log('Array it was called on: ', testArray);

// Arg 3+ is any elements you want to add in.

// Final comments:
// Splice is very very powerful. You can use slice to replace push, pop, shift, unshift, which means that this is actually a cure all for a lot of other methods. But - splice is obviously too powerful in some regards and if youre not careful in your use of slice you may well mutate data far beyond your intentions were. So some people will often mix some best practices to avoid doing damage with splice, namely mixing splice and slice. That will probably come up in a little.

// Join - Split

// Join is a method that takes an array of elements and attempts to join them by some delimiter.

// const elementsToJoin = [1, false, 'hi', null, undefined, 'Andrea'];
// When JS attempts to coerce null and undefined into strings, they say 'nah' and they become empty strings. It would be easy to misconstrue this as all FALSY values become empty strings, but we can clearly see that false became a string with no problem. This is just weird JS nuances you should never memorize.

// const joinedElements = elementsToJoin.join(', ');

// console.log(joinedElements);
// console.log(typeof joinedElements);

// Join brought together all of the elements into a string by the specified and only argument that is the string delimiter.

// const someString = 'hi im. bob and. i like. to eat.';
// const splitArr = someString.split('.');

// console.log(splitArr);

// const rejoinedString = splitArr.join('');

// console.log(rejoinedString);

// Slice
// Slice is probably one of the most commonly used array methods of all time. Across like all languages. Part of this has to do with something called 'references', but another part of this is that it helps protect our arrays from being mutated.
// Splice and slice make good friends.
// Slice makes a copy of an array. (its making what we call a shallow copy)

// const anotherArray = [1, 2, 3, 4, 5];
// const copiedArray = anotherArray.slice();

// copiedArray.splice(2, 2, 'hi');

// console.log('Copy: ', copiedArray);
// console.log('Original: ', anotherArray);

// TLDR: Use slice if you want to mutate something but arent sure you want to mutate the original thing.

// Concat merges two arrays into a new array.
// Expert advice: Remember to store the result - people often forget to store the new array somewhere.

// const firstHalfOfArray = [1, 2, 3];
// const secondHalfOfArray = [4, 5, 6];

// const fullArray = firstHalfOfArray.concat(secondHalfOfArray);

// console.log('first: ', firstHalfOfArray);
// console.log('second: ', secondHalfOfArray);
// console.log('full: ', fullArray);

// Nested Arrays
// Theyre the ones that arent flat, e.g. arrays within arrays, within arrays, within arrays, be scared

const flatArray = [1, 2, 3];
// console.log(flatArray[0]);

const nestedArray = [1, [2, 3], [4, 5, [6, 7]]];
// console.log(nestedArray[2][2][1]);

// For loops
// Sum Array - I want to sum every number in all the arrays
let sum = 0;

for (let i = 0; i < nestedArray.length; ++i) {
  const currentElement = nestedArray[i];

  if (Array.isArray(currentElement)) {
    for (let j = 0; j < currentElement.length; ++j) {
      const innerElement = currentElement[j];

      if (Array.isArray(innerElement)) {
        for (let k = 0; k < innerElement.length; ++k) {
          const deepElement = innerElement[k];

          // console.log(deepElement);
          sum += deepElement;
        }
      } else {
        // console.log(innerElement);   
        sum += innerElement;     
      }
    }
  } else {
    // console.log(currentElement);
    sum += currentElement;
  }
}

// console.log(sum);

// "Eliot why would we ever need nested arrays except for fullstack torturing us?"
// Data is rarely shaped the way you want it.
// Theres a very specific structure that comes to mind with nested arrays that you use all the time: youre actually using one right now. That is your screen. A screen is actually a nested array.

const computerScreen = [
  ['red', 'blue', 'yellow'],
  ['red', 'blue', 'yellow'],
  ['red', 'blue', 'yellow'],
  ['red', 'blue', 'yellow'],
  ['red', 'blue', 'yellow'],
]

// Weve drawn an X/Y grid.
// A 2 Dimensional array is legitimately just an x/y grid. If we add another layer of arrays, we developed 3d space. So like the thing we live in right now.

// Treasure Hunter
// Were going to make a map - were going to hide some treasure on it. Then were going to have to find the treasure.

const makeGrid = (height, width) => {
  const grid = [];

  let hidTreasure = false;

  for (let i = 0; i < height; ++i) {
    const row = [];

    for (let i = 1; i <= width; ++i) {
      if (Math.ceil(Math.random() * 25) > 23 && !hidTreasure) {
        hidTreasure = true;
        row.push('Treasure!');
      } else {
        row.push(i);
      }
    }

    grid.push(row.slice());
  }

  return grid;
}

const ourGrid = makeGrid(5, 5);

// console.log(ourGrid);

// Our job is to return the X, Y location of the treasure so that we all get rich.
const findTreasure = (treasureGrid) => {
  for (let y = 0; y < treasureGrid.length; ++y) {
    const row = treasureGrid[y];

    for (let x = 0 ; x < row.length; ++x) {
      const cell = row[x];
      
      if (cell === 'Treasure!') {
        return `X: ${x}, Y: ${y}`;
      }
    }
  }

  return 'No treasure found : (';
}

// console.log(findTreasure(ourGrid));

// The dangers of nested arrays...

// const innerArray = [1, 2, 3, 4, 5];
// const outerArray = ['hi', innerArray, innerArray.slice(), innerArray.slice()];

// innerArray.splice(0, 0, 'HI IM ELIOT!');

// console.log(outerArray);

// If later tonight, you start seeing weird results where something you modified appears everywhere, you probably need to slice something to protect it.