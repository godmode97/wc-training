
/**
 * Immutable
 * should not change state
 */

const food = ['spaghetti', 'fried chicken', 'chocolate'];

const anotherFood = food;

anotherFood.push('pan cake');

console.log(anotherFood); // ['spaghetti', 'fried chicken', 'chocolate', 'pan cake']
console.log(food); // ['spaghetti', 'fried chicken', 'chocolate', 'pan cake']

/**
 * [] of anotherFood is referenced to [] of food
 * whenever [] anotherFood is mutated it mutates its referenced object
 * which is the [] of food
 *
 */


const persons = ['Jhon', 'Paul', 'Peter'];
const additionalPersons = [...persons, 'Joshua'];

console.log(persons); // ['Jhon', 'Paul', 'Peter']
console.log(additionalPersons); // ['Jhon', 'Paul', 'Peter', 'Joshua']

/**
 * [] of persons is not mutated
 * we used "..." (spread) operator to copy [] of persons to another []
 *
 */

 const person = {
   name: '',
   age: 0
 }

console.log(person.name) // ''
console.log(person.age) // 0

const jhon = person;

jhon.name = 'Jhon Paul';
jhon.age = 21;

console.log(jhon.name) // 'Jhon Paul'
console.log(jhon.age) // 21

console.log(person.name) // 'Jhon Paul'
console.log(person.age) // 21

// creates a copy of person and overwrites the existing property
const alex = {...person, name: 'alex andersen', age: 25 };

console.log(alex.name); // alex andersen
console.log(alex.age); // 25

console.log(person.name) // 'Jhon Paul'
console.log(person.age) // 21


const arrayOfPeople = [ person, person, person ];

console.log(arrayOfPeople);

const newArrayOfPeople = [...arrayOfPeople].map(person => ({...person, age: Math.round(Math.random(0,100)* 100)}))

// created new copy of [] of people and changed their age randomly
console.log(newArrayOfPeople)
