const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// What is a method?

// The class definition: A method is any action that can be performed against an object.

const someArray = [1, 2, 3];

// const copyOfSomeArray = someArray.slice();
// ^ means 'i want to slice against someArray (an object)'

// myIndexOf
// Write indexOf yourself!

// someArray.indexOf()

// but... when we ask you to write indexOf, we say:

// It will take the array as an argument.

const myIndexOf = (anArr, searchTerm) => {
  for (let i = 0; i < anArr.length; ++i) {
    if (anArr[i] === searchTerm) return i;
  }

  return -1;
}

// This, is just a function - it takes arguments
myIndexOf(someArray, 1);

// Is a method: because the function we call knows the data it is being called against without us passing it in as an argument.
someArray.indexOf(1);

// Why are objects so useful?

const classObject = {
  Lisseth: 'Monte',
  Arshiya: 'I dont know',
  Andrea: 'Baez',
  Roxie: 'Turner',
  Emad: 'Georgy',
  Zach: 'G',
  thankEliot: function () {
    for (let studentName in this) {
      console.log(`${studentName} wants to say thanks to Eliot!`);
    }
  },
  eliotPaysClass: function (money) {
    console.log(`${Object.keys(this).join(', ')} each get $${money} from Eliot!`);
  }
}

// Objects often have purposes
// In this case, we want to store the people in the class
// Thats just what wed call 'the properties' of this object
// We havent defined the behaviors of this object
// Lets teach the class how to thankEliot

// classObject.thankEliot();
// classObject.eliotPaysClass(100);

// Why isnt this great?
// Not passing any arguments -> Most functions are only useful if they get data
// When we compare like [1, 2, 3].indexOf(2) to classObject.thankEliot() -> another thing becomes clear - were not really making good use of the data within classObject
// Specifically with methods, the point is kind of to use the data in the object

// Ok so, so far weve been accessing our data with a specific object variable name. Weve been saying classObject

const createClass = (name) => {
  // Bracket notation actually works during definition.
  // I am purposefully for this example not naming that object.

  return {
    [name]: 'A+',
    currentGrade: function () {
      console.log(this);
      return this[name];
    },
  };
}

// When we wrote currentGrade the function - nextClass did not exist
// The problem statement is this: How do we write a function that can always access the objects data it belongs to - without knowing the objects name?

const nextClass = createClass('Billy');

// console.log(nextClass.currentGrade());

// How do we actually get currentGrade the function to log billys grade?

// THIS

// This is what we call a lexical binder - This means that 'this' tries to determine what context a function is running in - it will then use that context as its value.

// Context is the scariest thing in code. How do you ever really know the context that code is running in?

// This is LONG IDENTIFIED to be one of the HARDEST, MOST ANNOYING, THINGS EVER MADE. It is not a thing that exists in other languages, this is javascript at its worst (or best) depends who you talk to.

// This has about 10 billion rules, youre never gonna know them all, but the only important one for you guys I can easily teach:

// Any object with a method written as a declared function (that means not an arrow function) has the object that it belongs to (is the value of a key in) as its this value.

// Any function that is a value of an object has the object as 'this'.

// Equifax Incident
// Were going to use 'this' and Objects to build a better secured login system then equifax had.
// Sell you on the value of objects - and how, when used right, they are enormously powerful tools.
// It lets you see me use this a bunch.

// console.log(typeof null)
// Once a single popular website uses your bug, we cant get rid of it, because that would mean that we have to take down that website.

// Were going to build a system that allows you to sign up for an account, log in to an account, and modify some data associated with your account if youre logged in.

const equifaxDatabase2 = {
  users: {},
  signUp: function (username, password) {
    username = this.basicHash(username);
    password = this.basicHash(password);
    // We need to check if the username is taken
    // if it is, dont allow signup
    if (this.users[username]) {
      console.log('Username already taken! Please choose another.');
      return;
    }
    // if it isnt, allow signup if they have a password
    this.users[username] = {
      password: password,
      creditScore: 800,
      loggedIn: false,
    };
    console.log('Successfully signed up!');
  },
  logIn: function (username, password) {
    username = this.basicHash(username);
    password = this.basicHash(password);
    // Check username exists
    if (this.users[username]) {
      if (this.users[username].password === password) {
        console.log('Successful sign in!');
        this.users[username].loggedIn = true;
        return;
      } else {
        console.log('Wrong password! Please try again!');
        return;
      }
    }

    // then check password matches
    // fail if either conditon is unmet
    console.log('Username does not exist, please sign up!');
  },
  logOut: function (username) {
    username = this.basicHash(username);
    if (this.users[username]) {
      this.users[username].loggedIn = false;

      console.log('Log out successful!');
    } else {
      console.log('You are not logged in.');
    }
  },
  screwUpCredit: function (username) {
    username = this.basicHash(username);
    if (this.users[username]) {
      this.users[username].creditScore -= 100;

      console.log('You accidentally invested in Chipotle and an EColi breakout happened.');
    } else {
      console.log('I cant make up a reason to screw up your credit if you arent in my database.');
    }
  },
  showDb: function () {
    console.log(this.users);
  },
  basicHash: function (aStr) {
    let hashedValue = '';
  
    for (let i = 0; i < aStr.length; ++i) {
      const currentChar = aStr[i];
  
      const nextCharCode = currentChar.charCodeAt(0).toString();
  
      hashedValue += nextCharCode;
    }
  
    return hashedValue;
  }
}

equifaxDatabase2.signUp('admin', 'password');
equifaxDatabase2.logIn('admin', 'password');
equifaxDatabase2.logOut('admin');
equifaxDatabase2.screwUpCredit('admin');
equifaxDatabase2.showDb();

// 1. If an attacker gets in, they see everyones password.
// 2. Do you really trust me, the programmer with your password? You shouldnt.
// 3. Even arguably a username shouldnt be public information.

// The equifax hack was a system built like this. Passwords and usernames were in plain text, along with your social security number and various other things.

// What can we do, to not be such idiots?

// Hashing - Hashing is seen as one of the #1 uses of objects.
// Hashing requires two things:
// A function that given x (like math x, any number in the world) -> consistently returns the same y (any other number in the word)
// e.g. no matter how many times i call hash('askjdbakjsd') it always returns 'askljdbalsdlans'. The reasons why and how it returns what it does DO NOT MATTER AS LONG AS IT IS CONSISTENT.
// Hashing relies on the fact that no two inputs can create the same output. So what I mean is that this function cant accidentally say: hash('a') -> 'b' and hash('c') -> 'b' -> this would lead to problems because, well, some user would lose all their data.

const someString = 'abc';

// 97 is an ASCII code value. That is - the number your computer uses to represent that letter. (or more specifically a character.)
// console.log(someString.charCodeAt(0));

// const basicHash = (aStr) => {
//   let hashedValue = '';

//   for (let i = 0; i < aStr.length; ++i) {
//     const currentChar = aStr[i];

//     const nextCharCode = currentChar.charCodeAt(0).toString();

//     hashedValue += nextCharCode;
//   }

//   return hashedValue;
// }

// In a good system, we never allow unhashing.

// console.log(basicHash(someString));
