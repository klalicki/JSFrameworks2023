import greet from "./greet.js";
/**
 * Solve this problem using ES modules (ESM).
 * ES modules allow you break up your code into multiple files (or modules), and then share code between different files.
 * To learn about ES modules:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports
 *
 * 1. Create a new file in the same folder as this file called "greet.js". (NOTE that you will need to include the extension ".js" in order for this to work)
 * 2. Copy the "greet" function below and paste it into the new file "greet.js"

const greet = (name) => {
  return `Hello ${name}!`;
};

 * 3. Export the "greet" function from "greet.js"
 * 4. Import the function at the top of this file using the name "greet"
 * 
 * If you see "Error [ERR_MODULE_NOT_FOUND]:", then your export or import is not correct.
 *
 * ES6 Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */

/**
 *  Return the highest number in the array
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/

const highestNumber = (array) => {
  // Write your answer here

  //solution 1: iterates through the array and checks each value against the current highest value - sets the current highest to the array item if the array item is higher
  // let highest = array[0];
  // array.forEach((item) => {
  //   if (item > highest) {
  //     highest = item;
  //   }
  // });
  // return highest;

  //solution 2: sorts the array from highest to lowest, then takes the first element;
  const sortedArr = array.sort((a, b) => {
    return b - a;
  });
  return sortedArr[0];
};

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

const combineArray = (array1, array2) => {
  return [...array1, ...array2];
};

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

const combineObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
  // Write your answer here
};

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

const doubleValues = (arr) => {
  return arr.map((num) => num * 2);
};

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
const onlyEvenValues = (arr) => {
  // Write your answer here

  ///second solution - more readable and uses a helper function

  const isEven = (val) => {
    if (val % 2) {
      return false;
    } else {
      return true;
    }
  };
  return arr.filter(isEven);

  //first solution - less lines of code but less readable
  /*   return arr.filter((item) => {
    return !(item % 2);
  }); */
};

/**
 * Create a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercase and lowercase) removed.
 * Every character in the new string should be lowercase.
 * @example
 * removeVowels('Elie') // ('l')
 * removeVowels('TIM') // ('tm')
 * removeVowels('ZZZZZZ') // ('zzzzzz')
 */

/**
 * Remove all vowels from within a string and lower case each letter
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
const removeVowels = (str) => {
  //option 1: filter function
  /*   let strArray = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];

  //helper function that checks if a given letter is a consonant and returns true if it is
  const isConsonant = (letter) => !vowels.includes(letter);
  let newStrArray = strArray.filter(isConsonant);
  return newStrArray.join("");
 */
  
  //option 2: replace, w/ regex
  return str.toLowerCase().replace(/[aeiou]+/gm, "");
};

/**
 * Solve this problem using the ternary operator.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * @returns {string}
 */

const getIsHungryText = () => {
  //don't change this variable
  let isStomachEmpty = false;
  /* convert this if else statement into a ternary expression */

  // let isHungry;
  // if (isStomachEmpty) {
  //   isHungry = "Go eat something.";
  // } else {
  //   isHungry = "Keep coding!";
  // }
  let isHungry = isStomachEmpty ? "Go eat something." : "Keep coding!";
  return isHungry;
};

/**
 * Refactor this to use destructuring. For an example of destructuring,
 * @see https://dmitripavlutin.com/javascript-object-destructuring/
 * @return Function should return tomorrow's temperature
 */

const getTempOfTomorrow = () => {
  // Do not change me
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
  };

  // Start of what you should change
  const { today, tomorrow } = AVG_TEMPERATURES;
  // End of what you should change
  return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`;
};

/**
 * Please use the high order function reduce to solve this problem. For an example of reduce,
 * @see https://www.airpair.com/javascript/javascript-array-reduce
 *
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
const addItems = (arr) => {
  return arr.reduce((a, b) => a + b);
};

/**
 * Remove duplicate values from an array.
 * @example
 * [1,1,2,2,3,3] // [1,2,3]
 * @param {array} arr
 * remove duplicates elements from an array
 *  hint you can use sets (optional) as a way to solve this problem.
 * @return {array}
 *
 */

const removeDuplicates = (array) => {
  //solution 1: sets
  /*   const newSet = new Set(array);
  return [...newSet]; */

  //solution 2: no sets
  const newArr = [];
  array.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

/**
 * Ignore this. It is for the tests.
 */

let greeter;
try {
  greeter = greet;
} catch (e) {
  // Normally it is bad practice to not handle the error.
  // However, I am just using try ... catch to get the unit test to work
}
export {
  greeter,
  highestNumber,
  combineArray,
  combineObject,
  doubleValues,
  onlyEvenValues,
  removeVowels,
  getIsHungryText,
  getTempOfTomorrow,
  addItems,
  removeDuplicates,
};
