const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);





let crazyArray = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]];

// logAnArray -> log all elements in an array

// const logAnArray = (anArr) => {
//   for (let i  = 0; i < anArr.length; ++i) {
//     const currentElem = anArr[i];

//     if (Array.isArray(currentElem)) {
//       for (let j  = 0; j < currentElem.length; ++j) {
//         const currentInnerElem = currentElem[j];
    
//         if (Array.isArray(currentInnerElem)) {
//           for (let j  = 0; j < currentElem.length; ++j) {
//             const currentInnerElem = currentElem[j];
        
//             if (Array.isArray(currentInnerElem)) {
//               for (let j  = 0; j < currentElem.length; ++j) {
//                 const currentInnerElem = currentElem[j];
            
//                 if (Array.isArray(currentInnerElem)) {
//                   for (let j  = 0; j < currentElem.length; ++j) {
//                     const currentInnerElem = currentElem[j];
                
//                     if (Array.isArray(currentInnerElem)) {
//                       for (let j  = 0; j < currentElem.length; ++j) {
//                         const currentInnerElem = currentElem[j];
                    
//                         if (Array.isArray(currentInnerElem)) {
//                           console.log('Max depth!');
//                         } else {
//                           console.log(currentInnerElem);      
//                         }
//                       }
//                     } else {
//                       console.log(currentInnerElem);      
//                     }
//                   }
//                 } else {
//                   console.log(currentInnerElem);      
//                 }
//               }
//             } else {
//               console.log(currentInnerElem);      
//             }
//           }
//         } else {
//           console.log(currentInnerElem);      
//         }
//       }
//     } else {
//       console.log(currentElem);      
//     }
//   }
// }

// logAnArray(crazyArray);

// So with the iterative strategy above, we end up in a place where it just doesnt make sense to use for loops. But I also think this problem exemplifies something else: Exactly what recursion is. We found ourselves eventually copy-pasting the same code over and over. Recursion is copy pasting the same code over and over. Functions are just reusable chunks of code. When we call a function inside itself, we are 'pasteing' the same code into the function...

const recurseLogAnArray = (anArr) => {
  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];

    if (Array.isArray(currentElem)) {
      recurseLogAnArray(currentElem);
    } else {
      console.log(currentElem);
    }
  }
}

// recurseLogAnArray(crazyArray);

// Recursion isnt a tool we WANT to use very often - but using it will far beat the effort that would go into solving problems like this iteratively.

// A lot of people when we go into recursion start thinking that we are NOT ALLOWED TO USE FOR LOOPS. Thats not true, they actually work really well together.

// When to use recursion and when to use a for loop.

const anotherCrazyArray = [1, 2, 3, [4, 5, 6, [ 7, 8, 9, ], ], ];

// Every time we traverse across an array or an object (so Object.keys or for in) -> we should use a for loop.
// Every time we have to dive down into an object -> we should use recursion.

// TLDR: If you are traversing values for loops are great, if you need to dig in and inspect object values - recursion is the solution.

// concatEls

const charArray = ['a', 'b', 'c', [ 'd', 'e' ], 'f', 'g', [[[[['h']]]]]];

const concatEls = (anArr) => {
  let concattedEls = '';

  // That i < anArr.length could be the base case
  for (let i = 0; i < anArr.length; ++i) {
    const currentEl = anArr[i];

    // Array.isArray is a really common technique with recursion to discover whether or not something should be recursed. With objects it will be typeof object === 'object'.
    // Technically speaking the base case is the else condition here.
    if (Array.isArray(currentEl)) {
      // This is the recursive case e.g. where i call the function again.
      concattedEls = concattedEls.concat(concatEls(currentEl));      
    } else {
      concattedEls = concattedEls.concat(currentEl);      
    }
  }

  return concattedEls;
}

// console.log(concatEls(charArray));

const numObj = {
  a: 10,
  b: 3,
  c: {
    d: 90,
    e: {
      f: 3,
      g: {
        h: {
          i: {
            j: 87,
          }
        }
      }
    }
  }
};

// const iterSumObj = (anObj) => {
//   let sum = 0;

//   for (let key in numObj) {
//     const value = numObj[key];

//     sum += value;
//   }

//   return sum;
// }

const sumObj = (anObj) => {
  let sum = 0;


  for (let key in anObj) {
    const value = anObj[key];

    if (typeof value === 'object') {
      sum += sumObj(value);
    } else {
      sum += value;  
    }
  }

  return sum;
}

console.log(sumObj(numObj));