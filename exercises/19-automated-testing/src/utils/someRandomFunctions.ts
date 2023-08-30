/**
 * STOP! You will not modify the code that is in the file.
 * Instead, you will be writing the unit tests for this exercise
 * inside `someRandomFunctions.test.js`
 */

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} sum of two numbers
 */
export const add = (num1: number, num2: number) => num1 + num2;

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} difference of two numbers
 */
export const subtract = (num1: number, num2: number) => num1 - num2;

/**
 * @param {number} num
 * @returns {boolean} whether or not a number is even
 */
export const isEvenNumber = (num: number) => num % 2 === 0;

/**
 * Loops through a multidimensional array of object literals
 * and returns a new array where only the adults are included
 *
 * @example
 * findAdults([{ name: "Aiden", age: 10 }, { name: "Janet", age: 43 }])
 *  // [{ name: "Janet", age: 43 }]
 *
 * @param {array} people a multidimensional array containing objects
 * where each object represents a person
 * and each object has the property age
 * @returns {array} the object literals in the array where the age is
 * greater than or equal to 18
 */
export const findAdults = (people: { name: string; age: number }[]) => {
  return people.filter((person) => {
    return person.age >= 18;
  });
};
