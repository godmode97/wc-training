
/**
 * First class function
 */


const operation = operate => (num1, num2) => operate(num1, num2);

/**
 * f() operation returns f() operate
 *
 * should be the same as:
 *
 * function operation(operate){
 *    return function operate(num1, num2){
 *      num1 + num2
 *    }
 * }
 */

const addNumbers = operation((num1, num2) => num1 + num2);

/**
 * when f() operation is assigned with variable addNumbers
 * it should something like this:
 *
 * operation(f()) // f() operation's parameter should be a f()
 *
 * operation((num1, num2) => num1 + num2)(1,2) should be the same as
 * addNumbers(1,2)
 */

const subtractNumbers = operation((num1, num2) => num1 - num2);

const divideNumbers = operation((num1, num2) => num1/num2);

const multiplyNumbers = operation((num1, num2) => num1 * num2);

console.log(addNumbers(1,2))   // 3
console.log(subtractNumbers(3,2))   // 1
console.log(divideNumbers(4,2))   // 2



const intensify = shout => message => shout(`${message.toUpperCase()}!!!`);

const scream = intensify(message=>console.log(message));

scream('The quick brown fox jumped over the lazy dog');
