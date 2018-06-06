const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







// what even is a loop? And why do I care?
// Loops are a structure designed to perform the same operation a certain amount of times.
// I want you to pretend to be a movie theatre employee. There is a line of people looking to get tickets to Solo (even though it has terrible reviews). Describe to me what the steps you might do are each time you deal with a new customer.
/*
  1. What time?
  2. How many people?
  3. Say cost
  4. Expect payment
  5. Give them a receipt
*/

// Then another person steps up for another ticket, what do I do?
// You should be the laziest person possible when writing code.
// You should NEVER WRITE THE SAME CODE TWICE EVER IN YOUR CAREER AS A PROGRAMMER.

// What that movie theatre employee does is the same sequence of steps as defined above, over and over and over and over and over and over. Until they hate their minimum wage job. thats all good and well, but this is one of the areas where computers are far superior - repeating a task over and over.
// thats what loops are. Can you define a sequence of actions - and should we perform that sequence of actions more then once? If so, how many times?

// All Repetitive programming structures have the following three things:
// The three things are:
// The Start of the Process - in the above human example the start of the line
// The end of the process - in the above human example the end of the line
// The update - What gets us closer to the end of the process? In the above human example we have selling a person a ticket as the update

// The most basic structure in all of programming to handle this is called a while loop.
// While Loops

// While loops are not a Javascript thing - theyre an every language thing - they also suffer from some issues well cover

// Initialize: count = 0
// var count = 0;

// // End Condition: count < 10
// while (count < 10) {
//   // Update: count += 1
//   count += 1;
//   console.log(count);
// }

// While loops are not self contained. We needed to write 'count' on line 51. That is not a part of the while loop and the while loop is dependent on it. This is what we call a bad design pattern. Its like if I asked you to build a house and you left all the brick and lumber 25 miles away. Yes, it works, but is it a good idea?

// Took all the bad pieces of while loops and fixed them
// For Loops
// A for loop is secretly just an abstraction of a while loop. For loops actually are while loops without you realizing it. 

// For loops are comprised of the three things i said you always need: for (initialization; condition; update)

//  init      ; cond   ; update
// for (var i = 0; i <= 10; ++i) {
//   console.log(i);
// }

// You do not need a semicolon after the update, and there are no restrictions to what each has to be.

// For loops are mental trickery. Theyre really a lie. They have 0 enforcement. How many of you right now would use 'i' as your var in a for loop?
// This is what we call 'best practices' youre not even always sure why you do things a certain way - but for some reason the internet has guided you to do so. This is because a large amount of programmer shave written it one specific way for so long that we just assume it to be the right way. This isnt a bad thing - its a good thing. You should use 'i' for your variable, and you should follow the design above, that being said, the funny thing about for loops is that you dont have to, we have just been tricked into following a pattern because everybody else does.

// for (false; Math.random() * 100 > 50; 'pancakes') {
//   console.log('hi');
// }

// For loops dont actually really do anything. Theyre just a way for us to frame our thoughts: We always need the same three things: initiliazation, condition, and update. For loops provide us a structure that forces us to do that (if youre sane). DONT DO WHAT I DID ABOVE. Thats exactly what for loops are built to avoid - is using terrible logic to express this kind of thing.

// The worst kind of iteration (iteration is another word for a for or while loop that youll hear me say a lot) is an infinite iteration. Infinite iteration occurs in one very specific scenario: The update never gets us closer to the condition.

// We need to remember to have our updates get us closer to the condition. If the condition is a less then, we must always increment. We have to promise the computer that all repetitive structures will eventually end.
// for (var i = 0; i < 10; i--) {
//   console.log('hi');
// }

// The point of what im about to teach is to never use them...

// Continue - Continue is a magic word we can use during a for loop to say: 'hey skip this current iteration of the for loop, i dont need to do this'
// Example: 'Skip all odd numbers'

// for (var i = 0; i < 10; ++i) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

// Better Logic will almost always assure us the ability to avoid continue
// for (var i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// Continue to most developers is seen as a sign that some logic in your code is wrong. It comes off as though you are unaware what it is your loop needs to do.

// Break - Break is even scarier, break is a magic word we use in a for loop to state that we do not need to continue the for loop at all.
// Example: Stop running a for loop at a specific ceiling.

// for (var i = 0; i < 10; ++i) {
//   if (i > 5) break;
//   console.log(i);
// }

// Why does this seem like a weird thing? Can we do this another way?

// Why not just change the condition?
// for (var i = 0; i <= 5; ++i) {
//   console.log(i);
// }

// Break is another example of when we are simply not understanding the logic of the for loop.

// Break and Continue exist from a day long past - I dare you to over the course of this course prove to me a time when you need break or continue and Ill buy you a pizza. No copy pasta from stack overflow - come up with it on your own.

// You dont need these and you shouldnt be using them.

// Debugging