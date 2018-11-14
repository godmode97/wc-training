// 01 Chaining
require('./helpers');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const chained = numbers.filter(number => number > 4).map(number => number*number).reduce((a, b) => a+b);

chained.log('chained');

// Composition
const compose = (...fns) => (arg) =>
        fns.reduce(
          (composed, f) => f(composed),
          arg
)

// Result should be the same as chained.
const filter = a => a.filter(a => a > 4);
const map = a => a.map(a => a*a);
const reduce = a => a.reduce((a,b) => a+b)

const composedFunctions = compose( filter,
  map,
  reduce
)

composedFunctions(numbers).log('composed')
