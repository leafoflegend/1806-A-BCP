const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Garbage Collection
// The process that your computer goes through to try to make sure that memory is available for everything. In each programming language that we use, we have to deal with this OURSELVES.
// "Does that mean using the word 'delete'"?
// No.
// In other languages we have to be very specific about this process... we might say things like (psuedocode warning) "i no longer need var thing" -> and the computer will dispose of it.
// In JavaScript yesterday I said the following: "Given a choice between convenience or performance javascript always picks convenience."
// Javascript DOES NOT WANT YOU TO THINK ABOUT GARBAGE COLLECTION AT ALL.
// So Garbage Collection in JS follows one rule: 'If you dont need something anymore, I will throw it out'.
// Need isnt a coding word so lets look at an example

// file1.js
// var someVar = 5;

// console.log(someVar);
// Right here we no longer need someVar - JavaScript thinks the same thing and will get rid of it.

// console.log('Done!');

// file2.js

// var someObj = {
//   someVar: 3,
// }

// console.log(someObj.someVar);
// // We no longer need someVar explicitly here

// console.log('Done logging!');

// console.log(someObj); // -> because this object is aware of someVar, it will not get thrown out until
// here -> here everything gets dumped and JS calls it a day.

// function returnGreeting () {
//   return function () {
//     console.log('Hi!');
//   }
// }

// let ourGreeting = returnGreeting();
// ourGreeting();

// We learned we can pass functions in...
// So we can actually combine the two sometimes.

const createForEachFunction = (anArray, callback) => {
  // This scope right here where anArray exists doesnt seem to exist by the time we call the function below...
  return function () {
    for (let i = 0; i < anArray.length; ++i) {
      const currentElem = anArray[i];

      callback(currentElem);
    }
  }
}

const logAnElem = elem => console.log(elem);
const someArray = [1, 2, 3, 4, 5];

const forEachFunc = createForEachFunction(someArray, logAnElem);

// forEachFunc();

let name = 'Eliot';

const sayName = () => {
  // Each function in JS gets its own memory. It will always look at the closest memory it can find for the things we ask for. So here, it looks for name inside of its scope (memory) before reaching for the more general memory outside of this function.
  let name = 'Not Eliot';

  console.log(name);
}

// sayName();

// This was to address a concept called 'seperation of concerns' so that functions can have memory and we dont just have a million variables that everything can touch.
// 'name' is a perfect example of a variable name that might be in a codebase like 500 times. We dont want everytime we say name to be overwriting other names.

// Were finally up to closure...

// Problem Statement: How do we create functions with their own memory?
// Solution: Closure

// Increment

// let sum = 0;

// const increment = () => {
//   sum += 1;

//   console.log(sum);
// }

// increment();
// increment();
// increment();
// increment();

// Solving this without using the root scope.

// Remember how i started this lesson with garbage collection?
function createIncrement () {
  // When do i no longer need sum?
  sum = 0;

  function increment () {
    sum += 1;

    console.log(sum);
  }

  return increment;
}

const increment = createIncrement();

// increment();
// increment();
// increment();
// increment();

// Because the function we created inside of createIncrement has a reference to sum... the Garbage collector cant delete sum. So - sum gets TRAPPED in what we call a CLOSURE. That means, SUM is now a secret reference that the only thing that knows about - is our new function INCREMENT. It will forever know about it. It has a reference to it inside of it, and nothing else does... The Garbage Collector long since deleted the scope of the function createIncrementor because we are done using on line 128. But, increment still needs the reference sum, so it keeps it, and can continue to use it.

// In a traditional OOP language (thats object oriented programming) this concept exists by another name, its called a 'private variable'. In Javascript we dont have that (for a variety of complex reasons) but this is as close as we can get to it.

// Lets Create a Banking System

function createBankAccount (name, startingAmount) {
  const bank = { // bank is really equal to 0xkjasiudgawd
    [name]: {
      currentValue: startingAmount,
    },
  }

  return {
    deposit: function (amount) {
      bank[name].currentValue += amount;

      console.log(`Deposit successful, current amount is $${bank[name].currentValue}`);
    },
    withdraw: function (amount) {
      if (bank[name].currentValue > amount) {
        bank[name].currentValue -= amount;

        console.log(`Withdraw successful for $${amount}. New balance is $${bank[name].currentValue}`);
      } else {
        console.log(`Not enough money to withdraw $${amount}`);
      }
    },
    viewInfo: function (amount) {
      console.log(`Current account for ${name}'s value is equal to $${bank[name].currentValue}`);
    },
  }
}

const AndreasBankAccount = createBankAccount('Andrea', 650000);

AndreasBankAccount.viewInfo();
AndreasBankAccount.deposit(2000000);
AndreasBankAccount.withdraw(1200000);

// Would the bank ever let you directly modify currentValue?

// console.log(AndreasBankAccount.Andrea);

// Weve created software where the only way to access the data - IS THROUGH PREDEFINED BEHAVIORS.

// We are solving a real business scenario. How do we create data that is only accessible through pre-defined behaviors?

// Theyve 'CLOSED' it off.
// Closures are a way to close data in a place where we define how you interact with it.