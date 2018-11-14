// recursion is a function that calls itself

// looping through recursion


// Count from 1 to 10

const countToTen = (num = 1) => {
  if(num > 10) return ;
  setTimeout(()=> {
    console.log(num)
    countToTen(num+1)
  }, 1000);
}

countToTen();

// factorial

const factorial = (num) => {
  if( num === 0 ) return 1;
  return num * factorial(num-1)
}

console.log(factorial(4));
