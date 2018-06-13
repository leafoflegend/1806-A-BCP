const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







// Arrays are in fact just objects!
// console.log(typeof []);

// Arrays are:
// An ordered collection of values!

// variables store...
// value
let aThing = 'another thing';

// Objects are:
// An unordered collection of values!

// A collection of values with order.
const anArray = [1, 2, 3, 4, 5];

// We know the first thing is at 0
// console.log(anArray[0]);
// We know the second thing is at 1
// console.log(anArray[1]);

const aFakeArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
};

// We know the first thing is at 0
// console.log(aFakeArray[0]);
// We know the second thing is at 1
// console.log(aFakeArray[1]);

// Objects are any structure made up of what we call key: value pairs.
// Key value pairs mean the following
// "Given some string, I can always find a value"

const secretDoor = {
  'abrakadabra': 'Magic here',
};

// Keys are exactly what they sound like - it is a key to a door. That door is storing a value. If we dont have the key, we cant get in the door.
// console.log(secretDoor['abrakadabra'])

// Arrays are just fancy objects that make a very simple promise:
// For every value you want stored, ill make another key, that is the next number.
// We can actually write arrays ourselves like I did above, by using numbers on the left side as keys, and values on the right.
// We could even make functions that do things like arrays do - arrays are just showing us the potential of this kind of paradigm.

// Give a string, get a value

// You can stretch this concept to do VERY VERY cool and powerful things (like arrays)

// Keys are ALWAYS STRING

// const anotherArray = [1, 2, 3];
const anotherArray = {
  '0': 'My zero was a string',
}

// Javascript coerces anything in brackets to a string.
// console.log(anotherArray[0]);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());
// console.log(typeof null);

// All fancy things in javascript are objects - so typeof can be a little alarming in how it explains what things are to you.

// We can create objects with curly braces
// var anObj = {};
// let anObj = {};
// const anObj = {};

// When we want to create key: value pairs immediately, we follow a similar syntax to arrays, we put key: value pairs inside the curly braces seperated by commas.

// There is no restriction to the type of value allowed in an object.
// Literal Objects - We created the entire object at once. (At defintion)
const ourFirstObj = {
  ourFirstKey: 'ourFirstValue',
  ourSecondKey: 'ourSecondValue',
  anObjValue: {},
  aFuncValue: function () {},
  aArray: [],
  aDate: new Date(),
  aSymbol: Symbol('hi'),
  aNumber: 10,
  aNull: null,
  aFalse: false,
  aTrue: true,
  anUndefined: undefined,
  aNaN: NaN,
};

// Object Assignment
const futureObject = {};

// There are two ways to add key value pairs to this object
// Dot notation

// Dot notation is preferable if possible
futureObject.zach = 'G';

// Bracket notation

futureObject['Emad'] = 'Georgy';

// console.log(futureObject);

futureObject.moneys = 100;

futureObject.moneys += 09182039812093810293;

// console.log(futureObject);

// Bracket Vs. Dot

// "I use bracket notation because arrays use bracket notation"

const testArray = [1, 2, 3];

// Javascript sees a decimal and a number after it, and thinks youre trying to write a number,. it cant interpret the difference between a floating point number and this strange thing you wrote.

// First reason you might use bracket notation
// Illegal Characters
// Numbers are not allowed to be the first character of a variable name ever;
// testArray.0

// The reason we use bracket notation with arrays is because we have too because numbers arent allowed to be accessed with decimals.

// Second reason we might use brackets
// Dynamic Access

// example

// let someThing = 'hi there bob';

// testArray[someThing];

// for (let i = 0; i < testArray.length; ++i) {
//   const currentElem = testArray[i];

//   console.log(currentElem);
// }

// Youve been using variables inside of bracket notation.
// It is a thing with a changing value

// Massive benefit of bracket notation is that we can pass LIVE JAVASCRIPT into the brackets and it will be interpreted into a string. This allows us to do some very important things:
// Read the number between 0 and length of an array, and change the key were looking at to the current one.
// It will also allow us to store keys for later use.

const secretKey = 'super-secret-key';

// Ten thousand lines of code
//
//
//
//
//
//
//
//
//
//
//

// Lets pretend for a moment (and this is a real thing in some code) - that we dont know the key to the value
const superSecretObject = {
  'super-secret-key': 'our secrets',
};

// console.log(superSecretObject[secretKey]);

// There is a word 'delete' that does what it sounds like: it deletes a key value pair from an object.
// You should be very cautious about using delete. You may have to tonight for the workshop (i cant recall) but in general its pretty rare to see it used 'in the wild'.

// const myGarbage = {
//   racoon: 'alive',
// };

// delete myGarbage.racoon;

const boomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

delete boomArray['length'];

// console.log(boomArray);
// console.log(boomArray.length);

// Be cautious with its use.

// in - its an operator (operators are like plus and minus symbols)

// in tells us true or false if a key exists in an object

const someOtherObj = { aKey: true };

// console.log('aKey' in someOtherObj);

// The in operator isnt needed for this

// console.log(!!someOtherObj['aKey']);

// Really really old longhand way of doing this:

// hasOwnProperty

// console.log(someOtherObj.hasOwnProperty('bKey'));

// That doesnt seem super useful
// In can actually be used in a very special way - that involves something called 'iterables'

// Remember when I explained that another word for - for loops - is iteration: iteration is a process where we move over every element of a collection. Iteration obviously has to exist places besides strings and arrays - the way we define what other places it is possible is by making them what we call 'iterable'

// Objects are iterable.

const ourTestObject = {
  Zach: 'G',
  Andrea: 'Baez',
  Emad: 'Georgy',
  Lisseth: 'Monte Cinos',
}

// for to specify we want to iterate
// let key could be any name it could be let pancakes or let windows
// we use in to say for all keys of an object
for (let key in ourTestObject) {
  // console.log('Key: ', key);
  // Bracket Notation
  // We can use the key to bracket access the value
  const value = ourTestObject[key];

  // console.log(`${key}: ${value}`);
}

// For In is definitely the easiest one to start with and understand.
// I probably have never used for in professionally. There are alternatives that make our lives more consistent.

// Object.keys
// Object.keys is a function that takes an object as its one argument, and it returns an array of the keys.

const classKeys = Object.keys(ourTestObject);

// console.log(classKeys);

// Now you dont need to know special syntax, we can fall back to using for loops the way we already know how.
// The thing I like about this over for in loops, is that it looks and feels, and is coded similarly to how we normally code. For In loops feel like a weird syntax exception to the rest of the language

for (let i = 0; i < classKeys.length; ++i) {
  const currentStudent = classKeys[i];

  // We still need to use bracket access to get the value. We need to use these keys to get to the values in the object.
  const studentLastName = ourTestObject[currentStudent];

  // console.log(`${currentStudent} ${studentLastName}`);
}

// A lot of the time, we just want the values, it seems like the keys are useless and are just getting in the way.

// Object.values -> It does what it sounds like, it grabs all the values from an object and puts them in an array.

const classValues = Object.values(ourTestObject);

// console.log(classValues);

// If you need the keys for some reason - theres no backtracking here. You cant use bracket access with a value to reverse your way to a key... right? So you have to have a problem where the keys just dont matter.

// The fancy boi - Object.entries
// Object.entries is for people who LOVE arrays. It turns an entire object into an array of arrays. What are within the nested arrays you ask? Key value pairs.

const classEntries = Object.entries(ourTestObject);

// console.log(classEntries);

// I love entries, its a bit harder of a structure to work with for obvious reasons, so dont try to use this if objects are confusing enough already.

// All of that being said - Id only really reccommend a for in loop or Object.keys. Those are the ways to go tonight or in the future, they are entirely capable of doing what each other does - so that choice is mostly opinion about which feels easier to work with for you.

// NESTED THINGS DIDNT GO AWAY!

const nestedObject = {
  anotherObj: {
    anArray: [1, 2, 3, 4, 5],
  },
  flatArr: [1, 2, 3],
  aNum: 5,
};

// the same rules always apply. We can just use a mixture of dot and bracket notation to get to the values we care about.

// console.log(nestedObject.anotherObj.anArray);
// console.log(nestedObject['anotherObj']['anArray']);





