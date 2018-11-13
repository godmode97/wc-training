 /**
  * First class function
  * functions can be variable
  *
  * @param {*} value
  */
const isNumber = value => typeof(value) === 'number';
console.log(isNumber(10)); // true
console.log(isNumber('10')); // false


const splitWord = word => word.split(' ');
console.log(splitWord('The quick brown fox'));

const person = {
  firstName: '',
  middleName: '',
  lastName: '',
  fullName(){
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
}

person.firstName='John'; // Jhon
person.middleName='Perry'; // Perry
person.lastName='Doe'; // Doe
console.log(person.fullName()); // Jhon Doe Perry
