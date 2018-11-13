
// Impure function

const dog = {
  name: 'Brownie',
  type: 'chow chow',
  age: 2
};

// causes side effect
function changeDogAge(){
  dog.age = 5;
  return dog;
}

/**
 * returns
 * {
 * name: 'Brownie',
 * type: 'chow chow',
 * age: 5
 * };
 */
console.log(changeDogAge());
console.log(dog);

const fruit = {
  type: 'apple',
  color: 'red',
  size: 'medium'
};


// create a pure function that only changes the color

const changeFruitColor = prop => ({
  ...fruit,
  color: prop.color
});

const newApple = changeFruitColor({color: 'green'});

/**
 * {
 * type: 'apple',
 * color: 'green',
 * size: 'medium'
 * }
 *
 */
console.log(newApple);
